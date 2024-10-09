import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";
import { useDispatch, useSelector } from "react-redux";
import ImageWithLoader from "../Components/ImageWithLoader";
import { BeatLoader } from "react-spinners";
import { addToCart } from "../Store/CartSlice";

function WishList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const dispatch = useDispatch();
  const [wishList, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addedItems, setAddedItems] = useState({}); // Track added items

  const user = useSelector((state) => state.user.value);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await makePostRequest("wishlist/list", {
        customer_id: user.logged_id,
      });
      setWishlist(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching wishlist data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = async (productId) => {
    try {
      await makePostRequest("wishlist/remove", {
        customer_id: user.logged_id,
        product_id: productId,
      });
      fetchData();
    } catch (error) {
      console.error("Error removing product from wishlist:", error);
    }
  };

  const handleAddToCart = (data) => {
    const isProductInCart = cartItems?.find((item) => item?.uid === data.uid);
    const messageKey = data.uid; // Unique key for each product

    if (isProductInCart) {
      dispatch(addToCart({ product: data, quantity: 1 }));
    } else {
      dispatch(addToCart({ product: data, quantity: 1 }));
    }

    // Set added item for 2 seconds
    setAddedItems((prev) => ({ ...prev, [messageKey]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [messageKey]: false })); // Reset after 2 seconds
    }, 2000);
  };

  return (
    <Layout>
      <main className="main">
        <div className="page-header">
          <div className="d-flex flex-column align-items-center">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Wishlist
                </li>
              </ol>
            </nav>
            <h1>Wishlist</h1>
          </div>
        </div>

        <div className="container">
          <div className="wishlist-title">
            <h2 className="p-2">My wishlist </h2>
          </div>
          {loading ? (
            <div className="w-100 d-flex align-items-center justify-content-center">
              <BeatLoader color="#01abec" size={20} />
            </div>
          ) : wishList?.length === 0 ? (
            <div className="w-100 d-flex align-items-center justify-content-center">
              <h1>No Products In Wishlist</h1>
            </div>
          ) : (
            <div className="wishlist-table-container">
              <table className="table table-wishlist mb-0">
                <thead>
                  <tr>
                    <th className="thumbnail-col"></th>
                    <th className="product-col">Product</th>
                    <th className="price-col">Price</th>
                    <th className="status-col">Stock Status</th>
                    <th className="action-col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {wishList?.map((data, index) => (
                    <tr key={index} className="product-row">
                      <td>
                        <figure className="product-image-container">
                          <Link to={`/product/${data?.slug}`} className="product-image">
                            <ImageWithLoader loaderHeight={80} src={data?.image} alt="product" />
                          </Link>
                          <a onClick={() => handleRemove(data?.uid)} className="btn-remove icon-cancel" title="Remove Product"></a>
                        </figure>
                      </td>
                      <td>
                        <h5 className="product-title">
                          <Link to={`/product/${data.slug}`}>{data?.heading}</Link>
                        </h5>
                      </td>
                      <td className="price-box">Rs. {data?.price}</td>
                      <td>
                        <span className="stock-status">In stock</span>
                      </td>
                      <td className="action">
                        <button
                          onClick={() => handleAddToCart(data)}
                          className="btn btn-dark btn-add-cart product-type-simple btn-shop"
                        >
                          {addedItems[data.uid] ? "Added" : "ADD TO CART"} {/* Conditional button text */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default WishList;
