import React from "react";
import PropTypes from "prop-types";

import style from "./Section.module.css";

const Section = ({ children }) => {
  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.registrationFormContainer}>
        {message && (
          <div
            className={`alert fade show d-flex ${message.type}`}
            role="alert"
          >
            {message.data}
            <span
              aria-hidden="true"
              className="ml-auto cursor-pointer"
              onClick={() => setMessage(null)}
            >
              &times;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.any,
};
