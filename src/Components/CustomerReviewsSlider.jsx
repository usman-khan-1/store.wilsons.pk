import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Sample author images
const author1 = "https://randomuser.me/api/portraits/men/1.jpg";
const author2 = "https://randomuser.me/api/portraits/women/2.jpg";
const author3 = "https://randomuser.me/api/portraits/men/3.jpg";
const author4 = "https://randomuser.me/api/portraits/women/4.jpg";
const author5 = "https://randomuser.me/api/portraits/women/5.jpg";
const author6 = "https://randomuser.me/api/portraits/men/6.jpg";

const CustomerReviewsSlider = () => {
  const reviews = [
    {
      id: 1,
      content:
        "At Medikazu, I can find easily the medicine I need. They will a lot of pharmacy products and something they offer to discount for me.",
      author: "Dubaiyun Roy",
      date: "April 8, 2020",
      rating: 4.5,
      image: author1,
    },
    {
      id: 2,
      content:
        "Medikazu pharmacy is the best one. Suchs are so supportive and behaved. Medicine price is genuine. Thanks.",
      author: "Rajamhi Sarkar",
      date: "September 24, 2020",
      rating: 5,
      image: author2,
    },
    {
      id: 3,
      content:
        "I bought medicine at Medikazu shop a lot. Products are so good. I'm going to a big high because of high-quality medicines, too problem",
      author: "Ligi Chandleri",
      date: "August 31, 2020",
      rating: 4,
      image: author3,
    },
    {
      id: 4,
      content:
        "Excellent service and fast delivery. The medicines are always fresh and properly packaged. Highly recommended!",
      author: "Alex Johnson",
      date: "March 15, 2021",
      rating: 3.7,
      image: author4,
    },
    {
      id: 5,
      content:
        "Great quality products and excellent customer service. Will definitely order again!",
      author: "Sarah Miller",
      date: "June 10, 2021",
      rating: 4.8,
      image: author5,
    },
    {
      id: 6,
      content:
        "Fast delivery and good packaging. Medicines were exactly as described.",
      author: "John Davis",
      date: "July 22, 2021",
      rating: 4.2,
      image: author6,
    },
  ];

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "-55px",
        top: "50%",
        transform: "translateY(-50%)",
         background: "#fff",
        color: "#000",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        fontSize: "1.2rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <FaArrowRight />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: "-55px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "#fff",
        color: "#000",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        fontSize: "1.2rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <FaArrowLeftLong />
    </button>
  );

  // Render stars based on rating using FaStar icons
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          style={{ color: "#FFD700", marginRight: "3px" }}
          size={18}
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key="half"
          style={{ color: "#FFD700", marginRight: "3px" }}
          size={18}
        />
      );
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar
          key={`empty-${i}`}
          style={{ color: "#ddd", marginRight: "3px" }}
          size={18}
        />
      );
    }

    return stars;
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div style={{ background: "#e6e6e6", padding: "50px 0" }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 40px",
        position: "relative" 
      }}>
        <h2
          style={{
            color: "#333",
            marginBottom: "2rem",
            textAlign: "center",
            fontSize: "2rem",
            paddingBottom:"20px"
          }}
        >
          Customer Reviews
        </h2>

        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} style={{ padding: "0 10px" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  height: "315px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  margin: "0 5px",
                  padding: "30px",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <div >
                    {renderStars(review.rating)}
                  </div>
                </div>

                <p
                  style={{
                    color: "#ACACAC",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    flexGrow: 1,
                  }}
                >
                  {review.content}
                </p>

                <div>
                  <img
                    src={review.image}
                    alt={review.author}
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "22px 0px",
                    }}
                  />
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginBottom: "5px",
                    }}
                  >
                    {review.author}
                  </h3>
                  <p style={{ color: "#888", fontSize: "14px" }}>{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviewsSlider;