import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";

function ShippingPolicy() {
  const [shippingPolicyData, setShippingPolicyData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("cms/pages", {
          slug: "shipping-policy",
        });
        setShippingPolicyData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <main className="main about">
        <div
          className="page-header page-header-bg text-left"
          style={{
            background: "50%/cover #D4E1EA url(/assets/imagess/shipping.jpg)",
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
                shippingPolicyData?.Title
              )}
            </h1>
            {/* <a className="btn btn-dark">Contact</a> */}
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
                  shippingPolicyData?.Title
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
                    __html: shippingPolicyData?.details,
                  }}
                />
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ShippingPolicy;
