import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makePostRequest } from "../Apis";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Footer() {
  const branding = useSelector((state) => state.branding.value);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false); // New state for subscription status

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await makePostRequest("newsletter/add", { email });
      setLoading(false);
      if (response?.status === "success") {
        setSubscribed(true); // Set subscribed state to true
        setEmail("");
        setTimeout(() => {
          setSubscribed(false); // Reset subscription status after 2 seconds
        }, 4000);
      } else {
        setEmail("");
        setSubscribed(false); // Reset in case of error
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <footer>
        <div className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6">
                  <h4 className="widget-newsletter-title font1 font-weight-bold text-white">
                    Sign Up to Newsletter
                  </h4>
                </div>
                <div className="col-md-6 col-lg-6">
                  <form onSubmit={handleSubmit} className="mb-0">
                    <div className="footer-submit-wrapper d-flex justify-content-end">
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="form-control mb-0"
                        placeholder="Enter your Email address..."
                        required
                      />
                      <button type="submit" className="btn btn-md btn-dark">
                        {loading ? "Subscribing..." : subscribed ? "Subscribed" : "Subscribe"}
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
                <div className="col-lg-4 col-12">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6 pr-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">ADDRESS:</h4>
                        <p>{branding?.site_headoffice_address}</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6 pr-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">EMAIL:</h4>
                        <a href="mailto:info@wilmart.com">
                          info@wilmart.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="social-icons mb-3 mb-lg-0">
                    <a href={branding?.site_facebook} className="social-icon social-facebook" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    {branding?.site_twitter && (
                      <a href={branding?.site_twitter} className="social-icon social-twitter" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {branding?.site_linkedin && (
                      <a href={branding?.site_linkedin} className="social-icon social-linkedin" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-6">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6 pl-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">PHONE:</h4>
                        <p>{branding?.site_landline_number}</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6 pl-sm-0">
                      <div className="contact-widget">
                        <h4 className="widget-title">WORKING DAYS/HOURS:</h4>
                        <p>Mon - Fri / 9:00AM - 5:00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-6">
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
                        <Link to={"/terms-of-service"}>Terms of Service & Condition</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {branding?.site_whatsapp && (
              <FloatingWhatsApp
                phoneNumber={branding?.site_whatsapp}
                message="Hello!"
                accountName={branding?.site_title}
                avatar="/assets/imagess/WILMART.png"
              />
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
