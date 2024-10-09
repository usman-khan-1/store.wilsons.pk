import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../Store/CartSlice"; // Import the action

function CartSidebar({ setOpenCart }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch(); // Use dispatch

  // Function to handle removing an item from the cart
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal(); // Get the subtotal

  const handleIncrement = (item) => {
    dispatch(addToCart({ product: item, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({ product: item, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div className="dropdown cart-dropdown">
      <Link
        onClick={() => setOpenCart(true)}
        title="Cart"
        className="dropdown-toggle cart-toggle"
      >
        <i className="minicart-icon"></i>
        <span className="cart-count badge-circle">{cartItems.length}</span>
      </Link>

      <div className="cart-overlay"></div>

      <div className="dropdown-menu mobile-cart show">
        <a
          onClick={() => setOpenCart(false)}
          title="Close (Esc)"
          className="btn-close"
          style={{ cursor: "pointer" }}
        >
          ×
        </a>

        <div className="dropdownmenu-wrapper custom-scrollbar">
          <div className="dropdown-cart-header">Shopping Cart</div>

          <div className="dropdown-cart-products">
            {cartItems.length === 0 ? (
              <h4>No items in the cart</h4>
            ) : (
              cartItems.map((data, index) => (
                <div key={index} className="cart-product">
                  <div key={data.uid} className="product">
                    <div className="product-details">
                      <h4 className="product-title">
                        <Link to={`/product/${data.seo_slug}`}>
                          {data.heading}
                        </Link>
                      </h4>

                      <span className="cart-product-info">
                        <span className="cart-product-qty">
                          {data.quantity}
                        </span>{" "}
                        × {data.price}
                      </span>
                    </div>

                    <figure className="product-image-container">
                      <Link
                        to={`/product/${data.seo_slug}`}
                        className="product-image"
                      >
                        <img
                          src={data.image}
                          alt="product"
                          width="80"
                          height="80"
                        />
                      </Link>

                      <a
                        className="btn-remove"
                        title="Remove Product"
                        onClick={() => handleRemove(data.uid)}
                      >
                        <span>×</span>
                      </a>
                    </figure>
                  </div>

                  <table className="table ">
                    <tbody>
                      <tr key={data.uid} className="product-row">
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))
            )}
          </div>

          <div className="dropdown-cart-total">
            <span>SUBTOTAL:</span>
            <span className="cart-total-price float-right">
              Rs. {""}
              {subtotal
                // .toFixed(2)
                .toLocaleString()}
            </span>
          </div>

          <div className="dropdown-cart-action">
            <Link to={"/cart"} className="btn btn-gray btn-block view-cart">
              View Cart
            </Link>
            {cartItems?.length !== 0 && (
              <Link to={"/checkout"} className="btn btn-dark btn-block">
                Checkout
              </Link>
            )}

            <Link
              to={"/category"}
              className="btn btn-dark btn-block continue-shopping"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
