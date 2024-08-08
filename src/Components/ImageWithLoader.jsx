import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

const ImageWithLoader = ({ src, alt, width, height,loaderHeight }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ width, height }}>
      {loading && (
        <div className="img-loader mx-2" style={{height:loaderHeight}}>
          <BeatLoader color="#01abec" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ display: loading ? "none" : "block" }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithLoader;
