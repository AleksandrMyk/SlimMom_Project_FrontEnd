import React, { useState, useEffect } from "react";
import { DiaryProductsListItem } from "../DiaryProductsListItem";
import styles from "./DiaryProductsList.module.css";
import axios from "axios";
const token = localStorage.getItem("token");

const DiaryProductsList = ({ day }) => {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(false);

  //   const dayToReceive = day.toISOString().split("T")[0];
  console.log(day);
  //   const handleRemoveProduct = (id) => {
  //     const res = products.filter((product) => product.id !== id);
  //     setProducts(res);
  //   };

  const getCurrentdayProductList = () => {
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
        setProducts(response.data);
      })
      .catch((error) => {
        if (error) {
          console.log("its some errors ", error);
        }
      });
  };

  useEffect(() => {
    console.log(day);
    getCurrentdayProductList();
  }, []);
  //    console.log(products);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isLoading && ""}
        {products &&
          products.map((product) => (
            <DiaryProductsListItem key={product._id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default DiaryProductsList;
