import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

function TermsCondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <Layout>
      <main className="main about">
        <div
          className="page-header page-header-bg text-left"
          style={{
            background:
              "50%/cover #D4E1EA url(/assets/imagess/terms-services.jpg)",
          }}
        >
          <div className="container">
            <h1>
              {/* <span>ABOUT US</span> */}
              Terms of Service & Condition
            </h1>
            {/* <a className="btn btn-dark">Contact</a> */}
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Terms of Service & Condition
              </li>
            </ol>
          </div>
        </nav>

        <div className="about-section">
          <div className="container">
            <p>The website is operated by WILMART.</p>
            <p>Terms like "we," "us," and "our" refer to WILMART.</p>
            <p>
              The website and all services provided are conditioned on the
              acceptance of all terms, conditions, policies, and notices.
            </p>
            <h2 className="subtitle">User Agreement:</h2>
            <ul>
              <li>
                By using the site or purchasing from it, users agree to the
                Terms of Service.
              </li>
              <li>
                These terms apply to all users, including browsers, vendors,
                customers, merchants, and content contributors.
              </li>
            </ul>
            <h2 className="subtitle">Key Sections</h2>
            <h6>Section 1 - Online Store Terms:</h6>
            <ul>
              <li>
                Users must be the age of majority in their jurisdiction or have
                parental consent.
              </li>
              <li>
                The service cannot be used for illegal purposes or violate any
                laws.
              </li>
            </ul>
            <h6>Section 2 - General Conditions:</h6>
            <ul>
              <li>WILMART reserves the right to refuse service.</li>
              <li>
                User content may be transferred unencrypted across networks.
              </li>
            </ul>
            <h6>Section 3 - Accuracy of Information:</h6>
            <ul>
              <li>
                The site’s information is for general use and may not be
                accurate or current.
              </li>
            </ul>
            <h6>Section 4 - Modifications:</h6>
            <ul>
              <li>Product prices and services can change without notice.</li>
              <li>WILMART can modify or discontinue services at any time.</li>
            </ul>
            <h6>Section 5 - Products or Services:</h6>
            <ul>
              <li>
                Products may be available exclusively online and have limited
                quantities.
              </li>
              <li>Descriptions and pricing can change without notice.</li>
            </ul>
            <h6>Section 6 - Billing and Account Information:</h6>
            <ul>
              <li>
                WILMART can refuse or limit orders and may notify users of order
                changes via provided contact information.
              </li>
            </ul>
            <h6>Section 7 - User Comments:</h6>
            <ul>
              <li>WILMART can use user comments without obligation.</li>
            </ul>
            <h6>Section 8 - Errors and Omissions:</h6>
            <ul>
              <li>
                WILMART reserves the right to correct errors and update
                information without prior notice.
              </li>
            </ul>
            <h6>Section 9 - Prohibited Uses:</h6>
            <ul>
              <li>
                Users cannot use the site for unlawful activities or to violate
                any laws.
              </li>
            </ul>
            <h6>
              Section 10 - Disclaimer of Warranties; Limitation of Liability:
            </h6>
            <ul>
              <li>
                WILMART does not guarantee uninterrupted, secure, or error-free
                service.
              </li>
              <li> Liability for any damages is limited.</li>
            </ul>
            <h6>Section 11 - Indemnification:</h6>
            <ul>
              <li>
                Users agree to indemnify WILMART against any third-party claims
                arising from their use of the service.
              </li>
            </ul>
            <h6>Section 12 - Termination:</h6>
            <ul>
              <li> Terms are effective until terminated by either party.</li>
              <li>
                WILMART can terminate the agreement if terms are violated.
              </li>
            </ul>
            <h6>Section 13 - Entire Agreement:</h6>
            <ul>
              <li>
                {" "}
                These terms constitute the entire agreement between users and
                WILMART.
              </li>
            </ul>
            <h6>Section 14 - Changes to Terms:</h6>
            <ul>
              <li>
                {" "}
                WILMART can update these terms at any time. Users are
                responsible for checking for the changes.
              </li>
            </ul>
            <h6>Section 15 - Contact Information:</h6>
            <ul>
              <li>
                Questions about the Terms of Service can be sent to WILMART at{" "}
                <b>
                  <a href="mailto:info@wilmart.pk">info@wilmart.pk</a>
                </b>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default TermsCondition;
