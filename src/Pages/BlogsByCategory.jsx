import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link, useParams } from "react-router-dom";
import { makePostRequest } from "../Apis";
import ImageWithLoader from "../Components/ImageWithLoader";
import { BeatLoader } from "react-spinners";
import moment from "moment";

function BlogsByCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slug = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
//   console.log("blogs?.lists[1]?.category", blogs?.lists[0]?.category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("blogs/category-detail", slug);
        setBlogs(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, [slug]);

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
                Blog
              </li>
            </ol>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {/* <h1>{blogs?.lists[1]?.category} </h1> */}
              <div className="blog-section row">
                {loading ? (
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <BeatLoader color="#01abec" size={20} />
                  </div>
                ) : blogs?.lists?.length === 0 ? (
                  <h1>No Blogs Listed</h1>
                ) : (
                  blogs?.lists?.map((data, index) => {
                    const date = new Date(data?.published_date);
                    const day = date.getDate();
                    const month = date.toLocaleString("default", {
                      month: "short",
                    });
                    const year = date.getFullYear();
                    return (
                      <div key={index} className="col-md-6 col-lg-4">
                        <article className="post">
                          <div className="post-media">
                            <Link to={`/blog/details/${data?.slug}`}>
                              <div
                                style={{
                                  backgroundImage: `url(${data?.image})`,
                                  height: "200px",
                                  width: "100%",
                                  backgroundPosition: "center center",
                                  backgroundSize: "cover",
                                }}
                              ></div>
                              {/* <ImageWithLoader
                                  a  src={data?.image}
                                    alt="Post"
                                    width="225"
                                    height="280"
                                  /> */}
                            </Link>
                            {data?.published_date && (
                              <div className="post-date">
                                <span className="day">{day}</span>
                                <span className="month">
                                  {month} {year}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="post-body">
                            <h2 className="post-title">
                              <Link to={`/blog/details/${data?.slug}`}>
                                {data?.heading}
                              </Link>
                            </h2>
                            <div className="post-content">
                              <p>{data?.short_detail}</p>
                            </div>
                          </div>
                        </article>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="col-lg-3 sidebar mobile-sidebar ">
              <div
                className="sidebar-wrapper"
                data-sticky-sidebar-options='{"offsetTop": 72}'
              >
                <div className="widget widget-categories">
                  <h4 className="widget-title">Blog Categories</h4>

                  <ul className="list">
                    {blogs?.category_lists?.map((data) => (
                      <li>
                        <Link to={`/blog/category/${data?.category_slug}`}>
                          {data?.category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget widget-post">
                  <h4 className="widget-title">Popular Posts</h4>

                  <ul className="simple-post-list">
                    {blogs?.popular_blogs?.map((data) => {
                      const formattedDate = moment(data?.published_date).format(
                        "DD MMMM, YYYY"
                      );

                      return (
                        <li className="row" >
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
                            <div className="post-info ">
                              <Link to={`/blog/details/${data?.slug}`}>
                                {data?.heading}
                              </Link>
                              {data?.published_date && (
                                <div className="post-meta">{formattedDate}</div>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default BlogsByCategory;
