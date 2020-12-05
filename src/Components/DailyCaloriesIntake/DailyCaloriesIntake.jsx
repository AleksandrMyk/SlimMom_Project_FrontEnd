import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./DailyCaloriesIntake.module.css";
const shortid = require("shortid");

const ModalRecomendedWindow = ({ hide, ccal, products }) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <p className={styles.kcal}>
        {ccal}
        <span className={styles.kcalDes}>ккал</span>
      </p>
      <p className={styles.products}>
        Продукты, которые вам не рекомендуется употреблять
      </p>
      <ol className={styles.list}>
        {products.map((product) => (
          <li key={shortid.generate()} className={styles.productList}>
            {product}
          </li>
        ))}
      </ol>
      <button
        className={styles.btnStart}
        onClick={() => {
          history.push("/login");
        }}
      >
        Начать худеть
      </button>
    </div>
  );
};

export default ModalRecomendedWindow;
