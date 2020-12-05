import React, { useState, useCallback, useEffect } from "react";
// import { useDispatch } from "react-redux";
import AsyncSelect from "react-select/async";
import axios from "axios";
import Calendar from "../../Components/Calendar";
import styles from "./AddProductForm.module.css";
import DiaryProductsList from "../../Components/DiaryProductsList";
//

import { useMediaQuery } from "./hooks";
// import productOperations from "../../Redux/product/productOperations";

const SEARCH_URL = "https://slimmom.herokuapp.com/";
const END_OPTIONS = "&page=1&limit=10";
const QUERY = `products?name=`;

export default function AddProductForm() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [productId, setIdProduct] = useState("");
  const [weight, setGramProd] = useState(0);
  const [date, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const data = {
      productId: productId,
      weight: weight,
      date: date,
    };
    const dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    axios
      .post("https://slimmom.herokuapp.com/days", dataToSend, {
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
  console.log(date);

  function handleSetNewDate(newValue) {
    setDate(newValue);
  }

  const handleChange = useCallback(
    (e) => setGramProd(Number(e.currentTarget.value)),
    []
  );

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
      <Calendar onChange={handleSetNewDate}></Calendar>
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
