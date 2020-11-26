import React from "react";
import styles from "./logo.module.css";
import imageLogo from "./images/logo-narrow.jpg";

function Logo() {
  return (
    <div className={styles.container}>
      <img src={imageLogo} alt="Logo SlimMom" />
    </div>
  );
}

export default Logo;
