import React from "react";
import { Slide } from "react-slideshow-image";
import PropTypes from "prop-types";
import "./styles.scss";

const Slides = ({ images }) => {
  const renderSlide = ({ image, url }) => (
    <div key={url} className="each-slide">
      <a href={url}>
        <img src={image} alt="new" height={450} width={450} />
      </a>
    </div>
  );

  return (
    <div className="slide-images">
      <Slide autoplay infinite arrows={false} easing="ease">
        {images.map((image) => renderSlide(image))}
      </Slide>
    </div>
  );
};

Slides.propTypes = {
  images: PropTypes.object,
};

export default Slides;
