import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function QualityPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <main className="main about">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Company Profile
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <h2 className="subtitle">Quality Policy</h2>
                <p>
                  We at Wilson’s Healthcare assure to provide best quality
                  Healthcare products to our customers, application of QMS
                  (Quality Management System) and good, organized & safe working
                  practices at Wilson’s Healthcare are our main objectives to
                  satisfy our customer. Quality is our top priority with
                  continuously reviewing and improving our systems and we are
                  committed to fulfill all applicable regulatory & statutory
                  requirements.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <img
                   src="https://img.freepik.com/free-vector/images-concept-illustration_114360-298.jpg?ga=GA1.1.1838803056.1721801062&semt=ais_hybrid"
                  className="h-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default QualityPolicy;
