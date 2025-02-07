import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";

function WhyChoose() {
  const [whyChoseData, setWhyChoseData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("cms/pages", {
          slug: "why-choose-wilmart",
        });
        setWhyChoseData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1>
              {loading ? (
                <div
                  className="shimmer-heading"
                  style={{ width: "200px", marginLeft: "10px" }}
                ></div>
              ) : (
                whyChoseData?.Title
              )}
            </h1>
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
              {/* <li className="breadcrumb-item active" aria-current="page">
                {whyChoseData?.Title}
              </li> */}

              <li className="breadcrumb-item active" aria-current="page">
                {loading ? (
                  <div
                    className="shimmer-heading"
                    style={{ width: "200px", marginLeft: "10px" }}
                  ></div>
                ) : (
                  whyChoseData?.Title
                )}
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
            {loading ? (
              <>
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
              </>
            ) : (
              <div
                className="my-3"
                dangerouslySetInnerHTML={{
                  __html: whyChoseData?.details,
                }}
              />
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default WhyChoose;
