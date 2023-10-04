import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageSlider({ images }) {
  const containerStyle = {
    height: "100%", // Set a fixed height for the container
  };

  const imageStyle = {
    height: "100%", // Set a 100% height for the image
    width: "auto", // Allow the width to adjust to maintain aspect ratio
    objectFit: "contain", // Maintain aspect ratio and fit within the container
    display: "block",
    margin: "0 auto",
  };

  return (
    <Carousel showArrows={true} transitionTime={300} showThumbs={false}>
      {images.map((imageUrl, index) => (
        <div key={index} style={containerStyle}>
          <img src={imageUrl} alt={`Product Image ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageSlider;
