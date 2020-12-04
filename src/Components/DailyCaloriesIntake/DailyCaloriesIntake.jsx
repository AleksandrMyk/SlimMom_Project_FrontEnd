import React from "react";
import styles from "./DailyCaloriesIntake.module.css";

const ModalRecomendedWindow = ({ hide, ccal, products }) => {
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
          <li key={product.index} className={styles.productList}>
            {product}
          </li>
        ))}
      </ol>
      <button className={styles.btnStart} onClick={hide}>
        Начать худеть
      </button>
    </div>
  );
};

export default ModalRecomendedWindow;
