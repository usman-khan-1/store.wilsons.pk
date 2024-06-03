import React from "react";

function TopBrand() {
  return (
    <div>
      <section className="brands-section">
        <div className="container">
          <h2
            className="section-title line-height-1 ls-10 pb-4 mb-5"
            data-animation-name="fadeInUpShorter"
            data-animation-delay="200"
            data-animation-duration="400"
          >
            Top Brands
          </h2>

          <div className="row">
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3">
              <img
                src="assets/Images/demoes/demo22/brands/brand1.png"
                className="img-fluid"
                alt="brand1"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3">
              <img
                src="assets/Images/demoes/demo22/brands/brand2.png"
                className="img-fluid"
                alt="brand2"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3">
              <img
                src="assets/Images/demoes/demo22/brands/brand3.png"
                className="img-fluid"
                alt="brand3"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3">
              <img
                src="assets/Images/demoes/demo22/brands/brand4.png"
                className="img-fluid"
                alt="brand4"
              />
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopBrand;
