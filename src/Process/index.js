import React from "react";
import PropTypes from "prop-types";
import { DoneAll } from "@material-ui/icons";
import Round from "../Round";
import Arrow from "../Arrow";
import "./styles.scss";

const Process = ({ text, icon: Icon }) => (
  <div className="process-step-root">
    <Round text="Hello World " bottom icon={DoneAll} />
    <Arrow />
    <Round text="Hello World" icon={DoneAll} />
    <Arrow down />
    <Round text="Hello World" bottom icon={DoneAll} />
  </div>
);

Process.propTypes = {};

export default Process;
