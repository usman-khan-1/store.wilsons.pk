import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
  const branding = useSelector((state) => state.branding.value);



  return (
    <div>
      <footer>
        <div className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-3">
                  <h4 className="widget-newsletter-title font1 font-weight-bold text-white">
                    Sign Up to Newsletter
                  </h4>
                </div>
                <div className="col-md-6 col-lg-4">
                  <p className="widget-newsletter-content ls-10 text-white mb-0">
                    Get all the latest information on Events, Sales and Offers.
                  </p>
                  <span className="widget-newsletter-content d-block font-weight-bold ls-10 text-white">
                    Receive $10 coupon for first shopping.
                  </span>
                </div>
                <div className="col-md-10 col-lg-5">
                  <form action="#" className="mb-0">
                    <div className="footer-submit-wrapper d-flex">
                      <input
                        type="email"
                        className="form-control mb-0"
                        placeholder="Enter your Email address..."
                        required
                      />
                      <button type="submit" className="btn btn-md btn-dark">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="footer-middle">
              <div className="row">
                <div className="col-lg-6">
                  <Link to={"/"}>
                    <img
                      className="logo"
                      src="/assets/Images/wilmart-logo.png"
                      alt="Porto Logo"
                      width="220"
                      height="80"
                    />
                  </Link>
                  <div className="row">
                    <div className="col-sm-6 pr-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">ADDRESS:</h4>
                        <a href="#">{branding?.site_headoffice_address}</a>
                      </div>
                    </div>
                    <div className="col-sm-6 pl-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">PHONE:</h4>
                        <a href="#"> {branding?.site_landline_number}</a>
                      </div>
                    </div>
                    <div className="col-sm-6 pr-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">EMAIL:</h4>
                        <a href="https://portotheme.com/cdn-cgi/l/email-protection#8ae7ebe3e6caeff2ebe7fae6efa4e9e5e7">
                          <span
                            className="__cf_email__"
                            data-cfemail="4825292124082d30292538242d662b2725"
                          >
                            info@wilsons.com
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 pl-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">WORKING DAYS/HOURS:</h4>
                        <a href="#">Mon - Fri / 9:00AM - 5:00PM</a>
                      </div>
                    </div>
                  </div>
                  <div className="social-icons mb-3 mb-lg-0">
                    <a
                      href={branding?.site_facebook}
                      className="social-icon social-facebook"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href={branding?.site_twitter}
                      className="social-icon social-twitter"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href={branding?.site_linkedin}
                      className="social-icon social-linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="widget widget-sm">
                    <h4 className="widget-title">Policies</h4>
                    <ul className="links">
                      <li>
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={"/shipping-policy"}>Shipping Policy</Link>
                      </li>
                      <li>
                        <Link to={"/return-policy"}>Return Policy</Link>
                      </li>
                      <li>
                        <Link to={"/terms-of-service"}>Terms Of Service & Condition</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget widget-sm">
                    <h4 className="widget-title">Features</h4>
                    <ul className="links">
                      <li>
                        <a href="#">Super Fast HTML Template</a>
                      </li>
                      <li>
                        <a href="#">Mobile & Retina Optimized</a>
                      </li>
                      <li>
                        <a href="#">Powerful Admin Panel</a>
                      </li>
                      <li>
                        <a href="#">1st Fully working Ajax Theme</a>
                      </li>
                      <li>
                        <a href="#">42 Unique Shop Layouts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="footer-bottom d-sm-flex align-items-center">
              <div className="footer-left">
                <span className="footer-copyright">
                  © Porto eCommerce. 2021. All Rights Reserved
                </span>
              </div>

              <div className="footer-right ml-auto mt-1 mt-sm-0">
                <img
                  src="/assets/Images/demoes/demo22/payment-icon.png"
                  alt="payment"
                  width="200"
                  height="27"
                />
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
