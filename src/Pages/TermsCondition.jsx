import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";

function TermsCondition() {
  const [termConditionData, setTermConditionData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("cms/pages", {
          slug: "terms-of-service",
        });
        setTermConditionData(response?.data);
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
              "50%/cover #D4E1EA url(/assets/imagess/terms-services.jpg)",
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
                termConditionData?.Title
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
              <li className="breadcrumb-item active" aria-current="page">
                {loading ? (
                  <div
                    className="shimmer-heading"
                    style={{ width: "200px", marginLeft: "10px" }}
                  ></div>
                ) : (
                  termConditionData?.Title
                )}
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          {loading ? (
            <div className="container">
              <div className="shimmer-description mb-1"></div>
              <div className="shimmer-description mb-1"></div>
              <div className="shimmer-description mb-1"></div>
              <div className="shimmer-description mb-1"></div>
              <div className="shimmer-description mb-1"></div>
            </div>
          ) : termConditionData?.details ? (
            <div
              dangerouslySetInnerHTML={{
                __html: termConditionData?.details,
              }}
            />
          ) : (
            <div className="container py-4">
              <h5>Detail Not Found</h5>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default TermsCondition;
