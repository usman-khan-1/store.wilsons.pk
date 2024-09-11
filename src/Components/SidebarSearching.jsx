import React, { useEffect, useState } from "react";
import { makePostRequest } from "../Apis";
import { Link } from "react-router-dom";

function SidebarSearching() {
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
    <>
      <form className="search-wrapper mb-2" action="#">
        <input
          type="text"
          className="form-control mb-0"
          placeholder="I'm searching for..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button
          className="btn icon-search text-white bg-transparent p-0"
          type="submit"
        ></button>
      </form>

      {filteredProducts.length > 0 && (
        <ul className="container side-bar-search-dropdown">
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
    </>
  );
}

export default SidebarSearching;
