import React, { useState, useEffect, useCallback } from "react";
import CalendarOnClick from '../Calendar/CalendarOnClick.jsx';
import { useDispatch } from "react-redux";
import AsyncSelect from "react-select/async";
import axios from "axios";
import styles from "./AddProductForm.module.css";
//

import { useMediaQuery } from "./hooks";
import productOperations from "../../Redux/product/productOperations";

const SEARCH_URL = "https://slimmom.herokuapp.com/";
const END_OPTIONS = "&page=1&limit=10";
const QUERY = `products?name=`;

export default function AddProductForm() {
  const dispatch = useDispatch();

  const [selectedTitle, setSelectedTitle] = useState("");
  const [productId, setIdProduct] = useState("");
  const [weight, setGramProd] = useState(0);
  const [isHandleSubmit, setIsHandleSubmit] = useState(false);
  const [Date, setDate] = useState("");

  // const handleSubmit = () => setIsHandleSubmit(true);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!productId || weight === 0) {
        return;
      }
      console.log("Id", productId);
      console.log("gram", weight);

      const date = "2020-12-12";

      const results_products = dispatch(
        productOperations.addProduct(productId, weight, date)
      );
      console.log("results_products", results_products);

      setIdProduct("");
      setGramProd(0);
    },
    [dispatch, productId, weight]
  );

  // useEffect(
  //   (e) => {
  //     e.preventDefault();
  //     if (!isHandleSubmit) {
  //       return;
  //     }
  //     debugger;
  //     //e.preventDefault();
  //     debugger;
  //     console.log("Id", productId);
  //     console.log("gram", weight);
  //     console.log("Submit", isHandleSubmit);
  //     debugger;
  //     const date = "2020-12-12";
  //     const results_products = dispatch(
  //       productOperations.addProduct(productId, weight, date)
  //     );
  //     debugger;
  //     console.log("results_products", results_products);
  //     debugger;
  //     setIdProduct("");
  //     setGramProd(0);
  //     setIsHandleSubmit(false);
  //   },
  //   [isHandleSubmit]
  // );

  // const handleSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     console.log("productId", productId);
  //     console.log("gramProd", gramProd);
  //     const results_products = dispatch(
  //       productOperations.addProduct(productId, gramProd, "2020-12-13")
  //     );
  //     console.log("results_products", results_products);
  //     // setIsSubmitting(true);
  //     // window.alert(JSON.stringify(e, 0, 2));
  //   },
  //   [dispatch]
  // );

  const handleChange = useCallback(
    (e) => setGramProd(Number(e.currentTarget.value)),
    []
  );

  //ф-ция которая вываливает данные в options
  const handleSearchTitles = (movieTitle) => {
    console.log("searching for", movieTitle);
    let searchTerm = movieTitle;

    if (!movieTitle || movieTitle === " ") {
      searchTerm = "омлет";
    }

    const urlRequest = `${SEARCH_URL}${QUERY}${searchTerm}${END_OPTIONS}`;
    const newRequest = axios.get(urlRequest);

    if (newRequest) {
      // new promise: pending
      return newRequest.then((response) => {
        console.log("response.data.results", response.data.docs);
        // promise resolved : now I have the data, do a filter
        const compare = response.data.docs.filter((i) =>
          i.title.ru.toLowerCase().includes(movieTitle.toLowerCase())
        );
        console.log("compare", compare);
        // reurning the label for react-select baed on the title
        return compare.map((prod) => ({
          label: prod.title.ru,
          value: prod._id,
        }));
      });
    }
  };

  //
  const currentHideNav = useMediaQuery("(min-width: 767px)");
  return (
    <>
    <CalendarOnClick getDateValue={setDate}></CalendarOnClick>
      <form className={`${styles.ProductEditor} `} onSubmit={handleSubmit}>
        <div className={`${styles.ProductEditorLabel} `}>
          <AsyncSelect
            placeholder="Введите название продукта*"
            className={`${styles.ProductEditorInput} ${styles.ProductEditorInputName}`}
            cacheOptions
            defaultOptions
            value={selectedTitle}
            loadOptions={handleSearchTitles}
            onChange={(property, value) => {
              console.log(property);
              setSelectedTitle(property);
              setIdProduct(property.value);
            }}
          />
        </div>
        <label className={`${styles.ProductEditorLabel} ${styles.Otstup}`}>
          <input
            className={`${styles.ProductEditorInput}  ${styles.ProductEditorInputKkal}`}
            type="number"
            placeholder="Граммы*"
            value={weight}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.ProductEditorButton}>
          {currentHideNav ? "+" : "Добавить"}
        </button>
      </form>

      <DiaryProductsList day={date}></DiaryProductsList>
    </>
  );
}
