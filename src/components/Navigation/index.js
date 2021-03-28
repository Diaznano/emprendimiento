import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ isVisible, changeVisible }) => {
  const item = (text, ref) => (
    <a className="nav-link" href={ref} onClick={changeVisible}>
      {text}
    </a>
  );

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "pink",
        width: 200,
        height: "1000%",
        position: "absolute",
        top: 0,
        transition: "all 0.5s ease-in",
        marginLeft: isVisible ? 0 : -200,
        paddingTop: 100,
      }}
    >
      {item("Inicio", "#/")}
      {item("Mates", "#/list/1")}
      {item("Cuadros", "#/list/2")}
      {item("Bazar", "#/list/3")}
    </div>
  );
};

Navigation.propTypes = {
  isVisible: PropTypes.bool,
  changeVisible: PropTypes.func,
};

export default Navigation;
