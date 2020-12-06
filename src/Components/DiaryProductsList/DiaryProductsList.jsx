import React, { useState, useEffect } from "react";
import { DiaryProductsListItem } from "../DiaryProductsListItem";
import styles from "./DiaryProductsList.module.css";
import axios from "axios";
// const token = localStorage.getItem("token");

const DiaryProductsList = ({ products }) => {
  console.log(products);

  const removeItem = (id, token) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    const data = {
      dayId: id,
    };
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    axios
      .delete("https://https://slimmom.herokuapp.com/days", dataToSend, {
        headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error) {
          console.log("its some errors ", error);
        }
      });
  };

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
