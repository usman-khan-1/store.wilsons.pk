import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function Manufacturing() {
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
                <h2 className="subtitle">Production Facility:</h2>
                <p>
                  Wilson’s Healthcare is one of the pioneer’s in the
                  Manufacturing of Neutraceutical products in Pakistan. It has
                  an absolute state of the art manufacturing facility
                  comprising:
                </p>
                <ul>
                  <li>Soft gelatin manufacturing</li>
                  <li>High Speed Sachet line</li>
                  <li>Up to date Tablet, Capsule & Liquid Section</li>
                  <li>Injection Blow molding (IBM)</li>
                  <li>Automatic Filling & Packaging line</li>
                </ul>
                <h2 className="subtitle">Quality Assurance:
                </h2>
                <p>
                At Wilson’s Healthcare, it is mandatory for all the products to undergo the process of ‘Scientific Validation’, which involves screening of all the steps that initiates from dispensing of raw materials to the finished goods. Scientific validation involves several extensive tests to confirm potency of the products, using state of the art equipment such as High Performance Liquid Chromatography (HPLC), Infra Red Spectroscopy (IR), etc. The process further involves rigorous analysis to ensure that highest level of purity & efficacy is expressed in to the products that we manufacture.
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

export default Manufacturing;
