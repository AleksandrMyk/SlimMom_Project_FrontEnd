import React from "react";
import { Spring } from "react-spring/renderprops";
import styles from "./logo.module.css";
import imageLogo from "./images/logo-mobile.png";

function Logo() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1500, duration: 1500 }}
    >
      {(props) => (
        <div style={props}>
          <div className={styles.container}>
            <img
              className={styles.imgContainer}
              src={imageLogo}
              alt="Logo SlimMom"
            />
            <div className={styles.logoName}>
              <span className={styles.slim}>Slim</span>
              <span className={styles.mom}> Mom</span>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Logo;
