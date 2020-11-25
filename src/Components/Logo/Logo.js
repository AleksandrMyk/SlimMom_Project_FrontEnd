import React from "react";
import styles from "./logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <img src="./images/logo.jpg" alt="Logo SlimMom" />
    </div>
  );
}

export default Logo;
