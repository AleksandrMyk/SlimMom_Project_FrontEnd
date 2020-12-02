import React from "react";
import styles from "./DailyCaloriesIntakeList.module.css";

const ModalRecomendedList = () => {
  return (
    <ol className={styles.list}>
      <li className={styles.productList}>Мучные продукты</li>
      <li className={styles.productList}>Молоко</li>
      <li className={styles.productList}>Красное мясо</li>
      <li className={styles.productList}>Копчености</li>
    </ol>
  );
};

export default ModalRecomendedList;
