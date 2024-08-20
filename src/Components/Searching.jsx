import React, { useEffect, useState } from "react";
import { makePostRequest } from "../Apis";
import { Link } from "react-router-dom";

function Searching() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makePostRequest("product/list");
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    };
    fetchData();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.heading.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const handleProductClick = () => {
    setFilteredProducts([]);
    setSearchTerm(""); // Optional: Clear the search term as well
  };

  return (
    <div className="header-col">
      <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0">
        <a href="#" className="search-toggle" role="button">
          <i className="icon-search-3"></i>
        </a>
        <form action="#" method="get" onSubmit={(e) => e.preventDefault()}>
          <div className="header-search-wrapper">
            <input
              type="search"
              className="form-control"
              name="q"
              id="q"
              placeholder="I'm searching for..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />

            <button
              className="btn icon-magnifier"
              title="search"
              type="submit"
            ></button>
          </div>
        </form>
        {filteredProducts.length > 0 && (
          <ul className="search-dropdown">
            {filteredProducts.map((product) => (
              <Link
                onClick={handleProductClick}
                to={`/product/${product?.seo_slug}`}
              >
                <li className="d-flex align-items-center" key={product.id}>
                  <img src={product.image} alt="" />
                  <p>{product.heading}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Searching;
