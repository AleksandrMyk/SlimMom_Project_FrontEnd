import React from "react";
import styles from "./DailyCaloriesIntakeList.module.css";

const ModalRecomendedList = (products) => {
  return (
    <ol className={styles.list}>
      {products.map((product) => (
        <li className={styles.productList}>{product}</li>
      ))}
    </ol>
  );
};

export default ModalRecomendedList;
