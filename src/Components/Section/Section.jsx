import React from "react";
import PropTypes from "prop-types";

import style from "./Section.module.css";

const Section = ({ children }) => {
  return <div className={style.Section}>{children}</div>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.any,
};
