import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Round = ({ text, icon: Icon, bottom }) => (
  <div className={`round_container ${bottom ? "bottom" : "top"}`}>
    {!bottom && <span className="text">{text}</span>}
    <div className="round">
      <div className="inner">
        <Icon className="icon" />
      </div>
    </div>
    {bottom && <span className="text">{text}</span>}
  </div>
);

Round.defaultProps = {
  bottom: false
};

Round.propTypes = {};

export default Round;
