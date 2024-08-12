import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="">
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
              <div className="blog-section row">
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <Link to={"/blog-details"}>
                        <img
                          src=" assets/Images/blog/home/post-1.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </Link>
                      <div className="post-date">
                        <span className="day">26</span>
                        <span className="month">Feb</span>
                      </div>
                    </div>

                    <div className="post-body">
                      <h2 className="post-title">
                        <Link to={"/blog-details"}>Top New Collection</Link>
                      </h2>
                      <div className="post-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras non placerat mi. Etiam non tellus sem.
                          Aenean...
                        </p>
                      </div>
                      <Link to={"/blog-details"} className="post-comment">
                        0 Comments
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <Link to={"/blog-details"}>
                        <img
                          src="  assets/Images/blog/home/post-2.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </Link>
                      <div className="post-date">
                        <span className="day">26</span>
                        <span className="month">Feb</span>
                      </div>
                    </div>

                    <div className="post-body">
                      <h2 className="post-title">
                        <Link to={"/blog-details"}>Fashion Trends</Link>
                      </h2>
                      <div className="post-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras non placerat mi. Etiam non tellus sem.
                          Aenean...
                        </p>
                      </div>
                      <Link to={"/blog-details"} className="post-comment">
                        0 Comments
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <Link to={"/blog-details"}>
                        <img
                          src=" assets/Images/blog/home/post-3.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </Link>
                      <div className="post-date">
                        <span className="day">26</span>
                        <span className="month">Feb</span>
                      </div>
                    </div>

                    <div className="post-body">
                      <h2 className="post-title">
                        <Link to={"/blog-details"}>Etiam laoreet sem</Link>
                      </h2>
                      <div className="post-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras non placerat mi. Etiam non tellus sem.
                          Aenean...
                        </p>
                      </div>
                      <Link to={"/blog-details"} className="post-comment">
                        0 Comments
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <Link to={"/blog-details"}>
                        <img
                          src=" assets/Images/blog/home/post-4.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </Link>
                      <div className="post-date">
                        <span className="day">26</span>
                        <span className="month">Feb</span>
                      </div>
                    </div>

                    <div className="post-body">
                      <h2 className="post-title">
                        <Link to={"/blog-details"}>Perfect Accessories</Link>
                      </h2>
                      <div className="post-content">
                        <p>
                          Leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets...
                        </p>
                      </div>
                      <Link to={"/blog-details"} className="post-comment">
                        0 Comments
                      </Link>
                    </div>
                  </article>
                </div>
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
                    <li>
                      <a href="#">All about clothing</a>

                      <ul className="list">
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Make-up &amp; beauty</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Fashion trends</a>
                    </li>
                    <li>
                      <a href="#">Haircuts &amp; hairstyles</a>
                    </li>
                  </ul>
                </div>

                <div className="widget widget-post">
                  <h4 className="widget-title">Recent Posts</h4>

                  <ul className="simple-post-list">
                    <li>
                      <div className="post-media">
                        <Link to={"/blog-details"}>
                          <img
                            src=" assets/Images/blog/widget/post-1.jpg"
                            alt="Post"
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <Link to={"/blog-details"}>Top New Collection</Link>
                        <div className="post-meta">February 26, 2018</div>
                      </div>
                    </li>

                    <li>
                      <div className="post-media">
                        <Link to={"/blog-details"}>
                          <img
                            src=" assets/Images/blog/widget/post-2.jpg"
                            alt="Post"
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <Link to={"/blog-details"}>Fashion Trends</Link>
                        <div className="post-meta">February 26, 2018</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Tags</h4>

                  <div className="tagcloud">
                    <a href="#">ARTICLES</a>
                    <a href="#">CHAT</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Blogs;
