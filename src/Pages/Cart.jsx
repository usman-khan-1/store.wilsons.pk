import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Store/CartSlice";
import { setCartItems } from "../Store/OrderSlice";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

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

          <div className="row">
            <div className="col-lg-8">
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
                    {cartItems.length > 0 ? (
                      cartItems?.map((data) => (
                        <tr key={data.uid} className="product-row">
                          <td>
                            <figure className="product-image-container">
                              <Link
                                to={`/product-details/${data.uid}`}
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
                              <Link to={`/product/${data.seo_slug}`}>
                                {data?.heading}
                              </Link>
                            </h5>
                          </td>
                          <td>Rs. {data?.price}</td>
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
                              Rs. {(data.price * data.quantity).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                    <p className="text-center">No Items In Cart</p>
                    )}
                  </tbody>
                  {/* <tfoot>
                    <tr>
                      <td colSpan="5" className="clearfix">
                        <div className="float-left">
                          <div className="cart-discount">
                            <form action="#">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder="Coupon Code"
                                  required
                                />
                                <div className="input-group-append">
                                  <button className="btn btn-sm" type="submit">
                                    Apply Coupon
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="float-right">
                          <button
                            type="submit"
                            className="btn btn-shop btn-update-cart"
                          >
                            Update Cart
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tfoot> */}
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cart-summary">
                <h3>CART TOTALS</h3>

                <table className="table table-totals">
                  <tbody>
                    {/* <tr>
                      <td>Subtotal</td>
                      <td>$17.90</td>
                    </tr> */}

                    <tr>
                      <td colSpan="2" className="text-left">
                        <h4>Shipping</h4>

                        <div className="form-group form-group-custom-control">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="radio"
                              //   checked
                            />
                            <label className="custom-control-label">
                              Cash On Delivery
                            </label>
                          </div>
                        </div>

                        <div className="form-group form-group-custom-control mb-0">
                          <div className="custom-control custom-radio mb-0">
                            <input
                              type="radio"
                              name="radio"
                              className="custom-control-input"
                            />
                            <label className="custom-control-label">
                              Other Payment Method
                            </label>
                          </div>
                        </div>

                        <form action="#">
                          <div className="form-group form-group-sm">
                            <label>
                              Shipping to <strong>NY.</strong>
                            </label>
                            <div className="select-custom">
                              <select className="form-control form-control-sm">
                                <option value="USA">United States (US)</option>
                                <option value="Turkey">Turkey</option>
                                <option value="China">China</option>
                                <option value="Germany">Germany</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group form-group-sm">
                            <div className="select-custom">
                              <select className="form-control form-control-sm">
                                <option value="NY">New York</option>
                                <option value="CA">California</option>
                                <option value="TX">Texas</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group form-group-sm">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Town / City"
                            />
                          </div>

                          <div className="form-group form-group-sm">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="ZIP"
                            />
                          </div>

                          <button
                            type="submit"
                            className="btn btn-shop btn-update-total"
                          >
                            Update Totals
                          </button>
                        </form>
                      </td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <td>Total</td>
                      <td>
                        Rs. {""}
                        {subtotal}
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
        </div>

        <div className="mb-6"></div>
      </main>
    </Layout>
  );
}

export default Cart;
