import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link, useParams } from "react-router-dom";
import { makePostRequest } from "../Apis";
import moment from "moment/moment";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

function BlogDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const slug = useParams();
  const currentUrl = window.location.href;
  const [blogDetails, setBlogDetails] = useState([]);

  console.log("blogDetailaaas", blogDetails);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("blogs/detail", slug);
        setBlogDetails(response?.data);
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, [slug]);

  const date = new Date(blogDetails?.detail?.published_date);
  const day = date.getDate();
  const month = date.toLocaleString("default", {
    month: "short",
  });
  const year = date.getFullYear();
  return (
    <Layout>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog Post
              </li>
            </ol>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <article className="post single">
                <div className="post-body">
                  <div className="post-date">
                    <span className="day">{day}</span>
                    <span className="month">{month}</span>
                  </div>

                  <h2 className="post-title mb-5">
                    {blogDetails?.detail?.heading}
                  </h2>

                  {blogDetails?.detail?.image && (
                    <div className="post-media">
                      <div
                        style={{
                          backgroundImage: `url(${blogDetails?.detail?.image})`,
                          height: "300px",
                          width: "100%",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      {/* <img src={blogDetails?.detail?.image} alt="Post" /> */}
                    </div>
                  )}

                  <div className="post-content">
                    <div
                      className="my-3"
                      dangerouslySetInnerHTML={{
                        __html: blogDetails?.detail?.details,
                      }}
                    />
                  </div>

                  <div className="post-share">
                    <h3 className="d-flex align-items-center">
                      <i className="fas fa-share"></i>
                      Share this post
                    </h3>

                    <div className="social-icons">
                      <FacebookShareButton url={currentUrl}>
                        <a
                          className="social-icon social-facebook"
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="icon-facebook"></i>
                        </a>
                      </FacebookShareButton>

                      <TwitterShareButton url={currentUrl}>
                        <a
                          className="social-icon social-twitter"
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="icon-twitter"></i>
                        </a>
                      </TwitterShareButton>

                      <LinkedinShareButton url={currentUrl}>
                        <a
                          className="social-icon social-linkedin"
                          target="_blank"
                          title="Linkedin"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </LinkedinShareButton>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="sidebar-toggle custom-sidebar-toggle">
              <i className="fas fa-sliders-h"></i>
            </div>
            <div className="sidebar-overlay"></div>
            <aside className="sidebar mobile-sidebar col-lg-3">
              <div
                className="sidebar-wrapper"
                data-sticky-sidebar-options='{"offsetTop": 72}'
              >
                {blogDetails?.category_lists?.length > 0 && (
                  <div className="widget widget-categories">
                    <h4 className="widget-title">Blog Categories</h4>

                    <ul className="list">
                      {blogDetails?.category_lists?.map((data) => (
                        <li>
                          <Link to={`/blog/category/${data?.category_slug}`}>
                            {data?.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {blogDetails?.releated_blog_lists?.length > 0 && (
                  <div className="widget">
                    <h4 className="widget-title">Related Posts</h4>

                    <ul className="simple-post-list">
                      {blogDetails?.releated_blog_lists?.map((data) => {
                        const formattedDate = moment(
                          data?.published_date
                        ).format("DD MMMM, YYYY");

                        return (
                          <li className="row">
                            <div className="col-4">
                              <div
                                className="post-media"
                                style={{
                                  backgroundImage: `url(${data?.image})`,
                                  height: "70px",
                                  width: "100%",
                                  backgroundPosition: "center center",
                                  backgroundSize: "cover",
                                }}
                              ></div>
                            </div>
                            <div className="col-8">
                              <div className="post-info">
                                <Link to={`/blog/details/${data?.seo_slug}`}>
                                  {data?.heading}
                                </Link>
                                {data?.published_date && (
                                  <div className="post-meta">
                                    {formattedDate}
                                  </div>
                                )}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default BlogDetails;
