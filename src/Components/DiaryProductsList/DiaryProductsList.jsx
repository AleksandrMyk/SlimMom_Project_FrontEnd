import React, { useState, useEffect } from "react";
import { DiaryProductsListItem } from "../DiaryProductsListItem";
import styles from "./DiaryProductsList.module.css";
import axios from "axios";
const token = localStorage.getItem("token");

const DiaryProductsList = ({ day }) => {
  const [products, setProducts] = useState();
  // const [currentDay, setCurrentDay] = useState(day);
  console.log(day);
  const getCurrentdayProductList = (isActive) => {
    // setCurrentDay(day);
    // console.log(currentDay);
    // const dayToReceive = day.toISOString().split("T")[0];
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get(`https://slimmom.herokuapp.com/days/${day}`, {
        headers,
      })
      .then((response) => {
        console.log(response);
        if (isActive) {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        if (error) {
          setProducts([]);
          console.log("its some errors ", error);
        }
      });
  };

  useEffect(() => {
    let isActive = true;
    getCurrentdayProductList(isActive);
    return () => {
      isActive = false;
      getCurrentdayProductList(isActive);
    };
  }, [products]);

  //    console.log(products);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* {isLoading && ""} */}
        {products &&
          products.map((product) => (
            <DiaryProductsListItem key={product._id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default DiaryProductsList;
