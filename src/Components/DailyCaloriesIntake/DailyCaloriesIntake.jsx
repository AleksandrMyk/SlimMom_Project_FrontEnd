import React from "react";
import styles from "./DailyCaloriesIntake.module.css";


const ModalRecomendedWindow = ({ hide }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <p className={styles.kcal}>
        2800 <span className={styles.kcalDes}>ккал</span>
      </p>
      <p className={styles.products}>
        Продукты, которые вам не рекомендуется употреблять
      </p>
      <ol className={styles.list}>
      <li className={styles.productList}>Мучные продукты</li>
      <li className={styles.productList}>Молоко</li>
      <li className={styles.productList}>Красное мясо</li>
      <li className={styles.productList}>Копчености</li>
    </ol>
      <button className={styles.btnStart} onClick={hide}>
        Начать худеть
      </button>
    </div>
  );
};

export default ModalRecomendedWindow;
