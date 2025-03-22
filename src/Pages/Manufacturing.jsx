import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";

function Manufacturing() {
  const [manufacturingData, setManufacturingData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("cms/pages", {
          slug: "manufacturing",
        });
        setManufacturingData(response?.data);
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
              "50%/cover #D4E1EA url(/assets/imagess/manufacturing.jpg)",
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
                manufacturingData?.Title
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
                  manufacturingData?.Title
                )}
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section py-0">
          <div>
            {loading ? (
              <div className="container">
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
                <div className="shimmer-description mb-1"></div>
              </div>
            ) : manufacturingData?.details ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: manufacturingData?.details,
                }}
              />
            ) : (
              <div className="container py-5">
                <h5>Detail Not Found</h5>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Manufacturing;
