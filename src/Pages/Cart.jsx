import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Store/CartSlice";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log("cartItems", cartItems);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();

  const handleIncrement = (item) => {
    dispatch(addToCart({ product: item, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({ product: item, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <Layout>
      <main className="main">
        <div className="container">
          <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
            <li className="active">
              <Link>Shopping Cart</Link>
            </li>
            <li>
              <Link to={"/checkout"}>Checkout</Link>
            </li>
            <li className="disabled">
              <Link>Order Complete</Link>
            </li>
          </ul>

          {cartItems.length > 0 ? (
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-table-container">
                  <table className="table table-cart">
                    <thead>
                      <tr>
                        <th className="thumbnail-col"></th>
                        <th className="product-col">Product</th>
                        <th className="price-col">Price</th>
                        <th className="qty-col">Quantity</th>
                        <th className="text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems?.map((data) => (
                        <tr key={data.uid} className="product-row">
                          <td>
                            <figure className="product-image-container">
                              <Link
                                to={`/product/${data.slug}`}
                                className="product-image"
                              >
                                <img src={data?.image} alt="product" />
                              </Link>
                              <a
                                className="btn-remove icon-cancel"
                                title="Remove Product"
                                onClick={() => handleRemove(data.uid)}
                              ></a>
                            </figure>
                          </td>
                          <td className="product-col">
                            <h5 className="product-title">
                              <Link to={`/product/${data.slug}`}>
                                {data?.heading}
                              </Link>
                            </h5>
                            {data?.rx !== "0" && (
                              <p className="rx-prescription-label">
                                prescription required
                              </p>
                            )}
                          </td>
                          <td>
                            Rs.
                            {Number(data?.price || 0)?.toLocaleString("en-US")}
                          </td>
                          <td>
                            <div className="product-single-qty">
                              <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                                <span className="input-group-btn input-group-prepend">
                                  <button
                                    className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                                    type="button"
                                    onClick={() => handleDecrement(data)}
                                  >
                                    -
                                  </button>
                                </span>
                                <input
                                  className="horizontal-quantity form-control"
                                  type="text"
                                  value={data?.quantity}
                                  readOnly
                                />
                                <span className="input-group-btn input-group-append">
                                  <button
                                    className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                                    type="button"
                                    onClick={() => handleIncrement(data)}
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <span className="subtotal-price">
                              Rs.{" "}
                              {(data.price * data.quantity)
                                ?.toFixed(2)
                                ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="5" class="clearfix px-0">
                          <div class="float-right">
                            <div type="submit" class="cart-total-amount">
                              Total:{" "}
                              <span>
                                Rs.{" "}
                                {subtotal
                                  ?.toFixed(2)
                                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div className="checkout-methods">
                    <Link to={"/checkout"} className="btn btn-block btn-dark">
                      Proceed to Checkout
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-center">No Items In Cart</h1>
          )}
        </div>

        <div className="mb-6"></div>
      </main>
    </Layout>
  );
}

export default Cart;
