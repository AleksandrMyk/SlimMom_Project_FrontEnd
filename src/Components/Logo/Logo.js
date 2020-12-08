import React from "react";
import styles from "./logo.module.css";
import imageLogo from "./images/logo-mobile.png";

function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.imgContainer} src={imageLogo} alt="Logo SlimMom" />
      <div className={styles.logoName}>
        <span className={styles.slim}>Slim</span>
        <span className={styles.mom}> Mom</span>
      </div>
    </div>
  );
}

export default Logo;
