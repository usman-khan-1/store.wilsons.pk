import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function QualityPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <Layout>
      <main className="main about">
        <div
          className="page-header page-header-bg text-left"
          style={{
            background:
              "50%/cover #D4E1EA url(/assets/imagess/policy.jpg)",
          }}
        >
          <div className="container">
            <h1>Quality Policy</h1>
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              Quality Policy
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
          <h2 className="subtitle">Quality Policy</h2>
                <p>
                  We at Wilson's Healthcare assure to provide best quality
                  Healthcare products to our customers, application of QMS
                  (Quality Management System) and good, organized & safe working
                  practices at Wilson's Healthcare are our main objectives to
                  satisfy our customer. Quality is our top priority with
                  continuously reviewing and improving our systems and we are
                  committed to fulfill all applicable regulatory & statutory
                  requirements.
                </p>
          </div>
        </div>

      

      </main>
    </Layout>
  );
}

export default QualityPolicy;
