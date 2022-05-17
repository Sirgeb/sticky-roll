import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Arrow = ({ down }) => (
  <div
    className="arrow"
    style={{ transform: `rotate(${down ? "" : "-"}45deg)` }}
  />
);

Arrow.propTypes = {};

export default Arrow;
