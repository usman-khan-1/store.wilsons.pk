import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <main className="main about">
        <div
          className="page-header page-header-bg text-left"
          style={{
            background:
              "50%/cover #D4E1EA url(/assets/imagess/privacy.jpg)",
          }}
        >
          <div className="container">
            <h1>
              {/* <span>ABOUT US</span> */}
              Privacy Policy
            </h1>
            {/* <a className="btn btn-dark">Contact</a> */}
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
            <p>
              This policy is a statement of our general privacy policy and
              practices governing the ways in which we collect, hold and use
              information about individual persons. Our privacy policy is easy
              to find as it is located on our homepage and each page of this
              website.
            </p>

            <h2 className="subtitle">What information do we collect? </h2>
            <p>
              We collect information from you when you register on our website,
              place an order or fill out a form. When ordering or registering on
              our site, as appropriate, you may be asked to enter your: name,
              e-mail address, mailing address or phone number. You may, however,
              visit our website anonymously.
            </p>
            <h2 className="subtitle">What do we use your information for? </h2>
            <p>
              Any of the information we collect from you may be used in one of
              the following ways:
            </p>

            <ul>
              <li>
                To personalize your experience (your information helps us to
                better respond to your individual needs)
              </li>
              <li>
                To improve our website (we continually strive to improve our
                website offerings based on the information and feedback we
                receive from you)
              </li>
              <li>
                To improve customer service (your information helps us to more
                effectively respond to your customer service requests and
                support needs)
              </li>
              <li>
                To process transactions (your information, whether public or
                private, will not be sold, exchanged, transferred, or given to
                any other company for any reason whatsoever, without your
                consent, other than for the express purpose of delivering the
                purchased product or service requested)
              </li>
              <li>
                To send periodic emails (The email address you provide for order
                processing, may be used to send you information and updates
                pertaining to your order, in addition to receiving /sending
                occasional company news, updates, related product or service
                information, etc.)
              </li>
            </ul>

            <h2 className="subtitle">How do we protect your information? </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information when you place an order or enter,
              submit, or access your personal information.
            </p>
            <h2 className="subtitle">Do we use cookies?</h2>
            <p>
              Yes. Cookies are small files that a website or its service
              provider transfers to your computer’s hard drive through your web
              browser (if you allow) that enables the websites or service
              providers systems to recognize your browser and capture and
              remember certain information.
            </p>
            <p>
              We use cookies to help us remember and process the items in your
              shopping cart and understand and save your preferences for future
              visits.
            </p>

            <h2 className="subtitle">
              Do we disclose any information to outside parties?{" "}
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties
              your personally identifiable information. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential. We may also
              release your information when we believe release is appropriate to
              comply with the law, enforce our site policies, or protect ours or
              others rights, property, or safety.
            </p>

            <h2 className="subtitle">Online Privacy Policy Only </h2>
            <p>
              This online privacy policy applies only to information collected
              through our website and not to information collected offline.
            </p>

            <h2 className="subtitle">Contact Us </h2>
            <p>
              If there are any questions regarding this privacy policy, you may
              write to us on <b>contact@WILMART.pk</b> or call{" "}
              <b>+923001234567 </b>
            </p>

            {/* <p className="lead">
              “ Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model search for evolved over
              sometimes by accident, sometimes on purpose ”
            </p> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default PrivacyPolicy;
