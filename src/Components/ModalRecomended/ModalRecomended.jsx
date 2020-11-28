import React from "react";
import s from "./ModalRecomended.module.css";
import ModalRecomendedList from "../ModalRecomendedList";

const ModalRecomendedWindow = () => {
  return (
    <div className={s.modal}>
      <button className={s.close}></button>
      <p className={s.title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <p className={s.kcal}>
        2800 <span className={s.kcalDes}>ккал</span>
      </p>
      <p className={s.products}>
        Продукты, которые вам не рекомендуется употреблять
      </p>
      <ModalRecomendedList></ModalRecomendedList>
      <button className={s.btnStart}>Начать худеть</button>
    </div>
  );
};

export default ModalRecomendedWindow;
