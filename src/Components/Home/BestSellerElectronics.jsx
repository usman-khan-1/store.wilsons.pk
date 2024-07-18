import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makePostRequest } from "../../Apis";

function BestSellerElectronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("product/list");
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  console.log("products", products);
  return (
    <div className="container ">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Best Sellers</h2>
      <div className="row">
        {products?.map((data, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <Link to={"/product-details"}>
                  <img
                    src={data?.image}
                    width="217"
                    height="217"
                    alt="product"
                  />
                </Link>
                {/* <div className="label-group">
                <div className="product-label label-hot">HOT</div>
              </div> */}
                <div className="btn-icon-group">
                  <a
                    href="#"
                    title="Add To Cart"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart"></i>
                  </a>
                </div>
                <a
                  // href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <Link to={"/shop"} className="product-category">
                      {data?.category}
                    </Link>
                  </div>
                  <Link
                    to={"/wishlist"}
                    title="Add to Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart"></i>
                  </Link>
                </div>
                <h3 className="product-title">
                  <Link to={"/product-details"}>{data?.heading}</Link>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "80%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div className="price-box">
                  <span className="product-price">Rs {data?.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellerElectronics;
