import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makePostRequest } from "../../Apis";
import ProductShimmer from "../ProductShimmer";
import ImageWithLoader from "../ImageWithLoader";

function BestSellerElectronics() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [toggleStates, setToggleStates] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makePostRequest("product/list");
        setProducts(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  const handleToggle = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  return (
    <div className="container ">
      <h2 className="section-title ls-n-10 pb-3 m-b-4">Best Sellers</h2>
      <div className="row">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-6">
                <ProductShimmer />
              </div>
            ))
          : products?.map((data, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-6">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={`/product/${data.seo_slug}`}>
                      <ImageWithLoader
                        src={data.image}
                        width="217"
                        height="217"
                        alt="product"
                      />{" "}
                    </Link>
                  
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <Link to={"/category"} className="product-category">
                          {data?.category}
                        </Link>
                      </div>
                      <div
                        title="Add to Wishlist"
                        className="btn-icon-wish"
                        onClick={() => handleToggle(index)}
                        style={{
                          color: toggleStates[index] ? "#01abec" : "gray",
                        }}
                      >
                        {toggleStates[index] ? (
                          <i class="fa-solid fa-heart"></i>
                        ) : (
                          <i class="fa-regular fa-heart"></i>
                        )}
                      </div>
                    </div>
                    <h3 className="product-title">
                      <Link to={`/product/${data.seo_slug}`}>
                        {data?.heading}
                      </Link>
                    </h3>

                    <div className="price-box">
                        Rs. {""}
                      <span className="product-price">
                        {data.price.toLocaleString("en-US")}
                      </span>
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
