import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";
import { useDispatch, useSelector } from "react-redux";
import ImageWithLoader from "../Components/ImageWithLoader";
import { BeatLoader } from "react-spinners";
import { addToCart } from "../Store/CartSlice";
import toast from "react-hot-toast";

function WishList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const [wishList, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

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
      console.error("Error fetching videos data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  const handleRemove = async (productId) => {
    try {
      const response = await makePostRequest("wishlist/remove", {
        customer_id: user.logged_id,
        product_id: productId,
      });
      fetchData();

      // if (response?.success) {
      //   
      //   setWishlist((prevWishlist) =>
      //     prevWishlist.filter((item) => item.uid !== productId)
      //   );
      //   toast.success("Product removed from wishlist!");
      // } else {
      //   toast.error("Failed to remove product from wishlist.");
      // }


    } catch (error) {
      console.error("Error fetching videos data:", error);
    }
  };

  const handleAddToCart = (data) => {
    const isProductInCart = cartItems?.find((item) => item?.uid === data.uid);

    if (isProductInCart) {
      // If the product is already in the cart, update the quantity by adding the new quantity to the existing one
      dispatch(
        addToCart({
          product: data,
          quantity: 1,
        })
      );
      toast.success("Product quantity updated in cart!");
    } else {
      // If the product is not in the cart, add it as a new item
      dispatch(addToCart({ product: data, quantity: 1 }));
      toast.success("Product added to cart successfully!");
    }
  };

  return (
    <Layout>
      <main className="main">
        <div className="page-header">
          <div className=" d-flex flex-column align-items-center">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Wishlist
                  </li>
                </ol>
              </div>
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
                          <Link
                            to={`/product/${data?.slug}`}
                            className="product-image"
                          >
                            <ImageWithLoader
                              loaderHeight={80}
                              src={data?.image}
                              alt="product"
                            />
                          </Link>

                          <a
                            onClick={() => handleRemove(data?.uid)}
                            className="btn-remove icon-cancel"
                            title="Remove Product"
                          ></a>
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
                          ADD TO CART
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
