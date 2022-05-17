import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

const Arrow = ({ down }) => {
  const settings = {
    dots: true
  };
  return (
    <div style={{ background: 'red', height: '50vh', width: '20vw', margin: '0 auto'}}>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  );
}

Arrow.propTypes = {};

export default Arrow;
