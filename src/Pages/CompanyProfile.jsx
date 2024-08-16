import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function CompanyProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <main className="main about">
        <div
          className="page-header page-header-bg text-left"
          style={{
            background:
              "50%/cover #D4E1EA url(/assets/imagess/company-profile.jpg)",
          }}
        >
          <div className="container">
            <h1>Company Profile</h1>
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
                About Us
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
          <h2 className="subtitle">About Us</h2>
                <p>
                  Wilson’s Healthcare is a privately owned Neutraceutical
                  company where science and nature are integrated to provide
                  science based health care products with well researched
                  formulations around the globe.
                </p>
                <p>
                  Centered in Islamabad, Pakistan, Wilson’s Healthcare sources
                  the finest quality raw materials from the world’s renowned
                  sources. Wilson’s Healthcare is embodied by highly qualified
                  Research & Development Teams who are dedicated to carefully
                  research and develop the products with highest level of Purity
                  & Efficacy. The teams are committed to ensure that quality is
                  met at every stage of production.
                </p>
                <h2 className="subtitle">Vision</h2>
                <p>
                  To be recognized as one of the leading Neutraceutical
                  Companies that provides effective science based nutritional
                  supplements to improve the quality of life.
                </p>
                <h2 className="subtitle">Mission Statement</h2>
                <p>
                  To enhance the standard of life by providing premium
                  healthcare products through state of the art manufacturing and
                  a strong network of marketing.
                </p>
          </div>
        </div>

      

      </main>
    </Layout>
  );
}

export default CompanyProfile;
