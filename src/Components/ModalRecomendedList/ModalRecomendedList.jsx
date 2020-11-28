import React from "react";
import s from "./ModalRecomendedList.module.css";

const ModalRecomendedList = () => {
  return (
    <ol className={s.list}>
      <li className={s.productList}>Мучные продукты</li>
      <li className={s.productList}>Молоко</li>
      <li className={s.productList}>Красное мясо</li>
      <li className={s.productList}>Копчености</li>
    </ol>
  );
};

export default ModalRecomendedList;
