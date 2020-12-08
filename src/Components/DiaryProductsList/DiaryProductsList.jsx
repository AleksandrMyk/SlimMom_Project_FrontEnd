import React, { useState, useEffect } from "react";
import { DiaryProductsListItem } from "../DiaryProductsListItem";
import styles from "./DiaryProductsList.module.css";
import axios from "axios";
// const token = localStorage.getItem("token");

const DiaryProductsList = ({ products, removeItem }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* {isLoading && ""} */}
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
