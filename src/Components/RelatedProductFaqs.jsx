import React, { useState } from "react";

const RelatedProductFaqs = () => {
  const faqs = [
    {
      question: "What is the return policy?",
      answer: "You can return the product within 7 days of delivery.",
    },
    {
      question: "Is the product under warranty?",
      answer: "Yes, it comes with a 1-year manufacturer warranty.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer: "Yes, COD is available in most cities.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes, a tracking link will be sent after shipment.",
    },
    {
      question: "Are there any discounts available?",
      answer: "Check our homepage for current promotions and offers.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* FAQs */}
        <div className="col-lg-8 col-md-6 col-12">
          <h3 className="mb-4 mt-3 product-faqs-main-heading">FREQUENTLY ASKED QUESTIONS (FAQ’S)</h3>
          <div className="faq-list pr-5">
            {faqs?.map((faq, index) => (
              <div
                key={index}
                className={`faq-item mb-2 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="faq-question d-flex justify-content-between align-items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="product-faq-title mb-0 ">{faq.question}</h4>
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer mt-2">
                    <p className="text-muted mb-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-4 col-md-6 col-12 text-center mt-4 mt-md-0">
          <img
            src="/assets/imagess/product-faq-img.png"
            alt="FAQ illustration"
            className="img-fluid rounded"
            // style={{ maxHeight: "450px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .faq-item {
          border-bottom: 1px solid #ddd;
          padding: 12px 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-question {
          cursor: pointer;
        }

        .faq-icon {
          font-size: 22px;
          font-weight: bold;
          color: #327dc0;
          width: 26px;
          text-align: center;
          line-height: 1;
        }
        .product-faqs-main-heading {
          font-size: 18px;
          font-weight: 600;
          font-style: semi-bold;
        }
           .product-faq-title {
          font-size: 16px;
          font-weight: 600;
          font-style: semi-bold;
        }

        .faq-answer {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-item:hover .faq-question h5 {
          color: #327dc0;
        }
      `}</style>
    </div>
  );
};

export default RelatedProductFaqs;
