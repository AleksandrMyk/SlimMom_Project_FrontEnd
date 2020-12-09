import React from "react";
import { DiaryProductsListItem } from "../DiaryProductsListItem";
import styles from "./DiaryProductsList.module.css";

const DiaryProductsList = ({ products, removeItem }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {products &&
          products.map((product) => (
            <DiaryProductsListItem
              key={product._id}
              onRemove={removeItem}
              {...product}
            />
          ))}
      </div>
    </div>
  );
};

export default DiaryProductsList;
