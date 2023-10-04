import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageSlider(props) {
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    margin: "0 auto",
  };
  return (
    <Carousel showArrows={true} transitionTime={300} showThumbs={false}>
      <div>
        <img src={props.img1} alt="Product Image" style={imageStyle} />
      </div>
      <div>
        <img src={props.img2} alt="Product Image" style={imageStyle} />
      </div>
    </Carousel>
  );
}

export default ImageSlider;
