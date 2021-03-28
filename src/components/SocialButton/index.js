import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const SocialButtonsPage = ({ isVisible }) => {
  return (
    <div
      style={{
        left: isVisible ? 205 : 5,
        transition: "all 0.5s ease-in",
      }}
      className="social-button"
    >
      <a
        className="icon-button"
        href="https://api.whatsapp.com/send?phone=5493815247886"
      >
        <img
          src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
          height={50}
          width={50}
          className="img-social"
        />
      </a>
      <a className="icon-button" href="https://www.instagram.com/sofj.cuadros/">
        <img
          src="https://www.pngkey.com/png/full/283-2831746_insta-icon-instagram.png"
          height={50}
          width={50}
          className="img-social"
        />
      </a>
    </div>
  );
};

SocialButtonsPage.propTypes = {
  isVisible: PropTypes.bool,
};

export default SocialButtonsPage;
