import React from "react";
import Layout from "../Components/Layout";

function Blogs() {
  return (
    <Layout>
      <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
          <div class="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="demo4.html">
                  <i class="icon-home"></i>
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="blog-section row">
                <div class="col-md-6 col-lg-4">
                  <article class="post">
                    <div class="post-media">
                      <a href="single.html">
                        <img
                          src=" assets/Images/blog/home/post-1.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </a>
                      <div class="post-date">
                        <span class="day">26</span>
                        <span class="month">Feb</span>
                      </div>
                    </div>

                    <div class="post-body">
                      <h2 class="post-title">
                        <a href="single.html">Top New Collection</a>
                      </h2>
                      <div class="post-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras non placerat mi. Etiam non tellus sem.
                          Aenean...
                        </p>
                      </div>
                      <a href="single.html" class="post-comment">
                        0 Comments
                      </a>
                    </div>
                  </article>
                </div>
                <div class="col-md-6 col-lg-4">
                  <article class="post">
                    <div class="post-media">
                      <a href="single.html">
                        <img
                          src="  assets/Images/blog/home/post-2.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </a>
                      <div class="post-date">
                        <span class="day">26</span>
                        <span class="month">Feb</span>
                      </div>
                    </div>

                    <div class="post-body">
                      <h2 class="post-title">
                        <a href="single.html">Fashion Trends</a>
                      </h2>
                      <div class="post-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras non placerat mi. Etiam non tellus sem.
                          Aenean...
                        </p>
                      </div>
                      <a href="single.html" class="post-comment">
                        0 Comments
                      </a>
                    </div>
                  </article>
                </div>
                <div class="col-md-6 col-lg-4">
                  <article class="post">
                    <div class="post-media">
                      <a href="single.html">
                        <img
                          src=" assets/Images/blog/home/post-3.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </a>
                      <div class="post-date">
                        <span class="day">26</span>
                        <span class="month">Feb</span>
                      </div>
                    </div>

                    <div class="post-body">
                      <h2 class="post-title">
                        <a href="single.html">Etiam laoreet sem</a>
                      </h2>
                      <div class="post-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras non placerat mi. Etiam non tellus sem.
                          Aenean...
                        </p>
                      </div>
                      <a href="single.html" class="post-comment">
                        0 Comments
                      </a>
                    </div>
                  </article>
                </div>
                <div class="col-md-6 col-lg-4">
                  <article class="post">
                    <div class="post-media">
                      <a href="single.html">
                        <img
                          src=" assets/Images/blog/home/post-4.jpg"
                          alt="Post"
                          width="225"
                          height="280"
                        />
                      </a>
                      <div class="post-date">
                        <span class="day">26</span>
                        <span class="month">Feb</span>
                      </div>
                    </div>

                    <div class="post-body">
                      <h2 class="post-title">
                        <a href="single.html">Perfect Accessories</a>
                      </h2>
                      <div class="post-content">
                        <p>
                          Leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets...
                        </p>
                      </div>
                      <a href="single.html" class="post-comment">
                        0 Comments
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            {/* <div class="sidebar-toggle custom-sidebar-toggle">
              <i class="fas fa-sliders-h"></i>
            </div>
            <div class="sidebar-overlay"></div> */}
            <div class="col-lg-3 sidebar mobile-sidebar ">
              <div
                class="sidebar-wrapper"
                data-sticky-sidebar-options='{"offsetTop": 72}'
              >
                <div class="widget widget-categories">
                  <h4 class="widget-title">Blog Categories</h4>

                  <ul class="list">
                    <li>
                      <a href="#">All about clothing</a>

                      <ul class="list">
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

                <div class="widget widget-post">
                  <h4 class="widget-title">Recent Posts</h4>

                  <ul class="simple-post-list">
                    <li>
                      <div class="post-media">
                        <a href="single.html">
                          <img
                            src=" assets/Images/blog/widget/post-1.jpg"
                            alt="Post"
                          />
                        </a>
                      </div>
                      <div class="post-info">
                        <a href="single.html">Top New Collection</a>
                        <div class="post-meta">February 26, 2018</div>
                      </div>
                    </li>

                    <li>
                      <div class="post-media">
                        <a href="single.html">
                          <img
                            src=" assets/Images/blog/widget/post-2.jpg"
                            alt="Post"
                          />
                        </a>
                      </div>
                      <div class="post-info">
                        <a href="single.html">Fashion Trends</a>
                        <div class="post-meta">February 26, 2018</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="widget">
                  <h4 class="widget-title">Tags</h4>

                  <div class="tagcloud">
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
