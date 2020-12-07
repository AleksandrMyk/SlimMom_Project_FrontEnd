import React, { useState, useEffect, useCallback } from "react";
import CalendarOnClick from "../Calendar/CalendarOnClick.jsx";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import axios from "axios";
import styles from "./AddProductForm.module.css";

import { useMediaQuery } from "./hooks";
import productOperations from "../../Redux/product/productOperations";
import DiaryProductsList from "../DiaryProductsList/DiaryProductsList";
//
//
const customStyles = {
  container: (_, { selectProps: { width } }) => ({
    width: width,
    position: "relative",
    borderBottom: "1px solid #e0e0e0",
  }),

  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    position: "absolute",
    padding: 20,
  }),

  indicatorsContainer: () => ({
    display: "none",
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),

  valueContainer: () => ({
    display: "flex",
    flexWrap: "wrap",
    height: 60,
    paddingBottom: 10,
  }),

  input: () => ({
    position: "absolute",
    height: "50%",
    top: 25,
    div: {
      height: "100%",
      input: {
        height: "100%",
        fontWeight: 700,
      },
    },
  }),

  placeholder: (_, { selectProps: { placeholder } }) => ({
    placeholder: placeholder,
    width: "100%",
    height: "50%",
    position: "absolute",

    top: 35,
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
//
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
  const [products, setProducts] = useState([]);

  // const handleSubmit = () => setIsHandleSubmit(true);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!productId || weight === 0) {
        return;
      }
      const results_products = dispatch(
        productOperations.addProduct(productId, weight, Date)
      );
      setIdProduct("");
      setGramProd(0);
    },
    [dispatch, productId, weight]
  );

  // useEffect(() => {
  //   dispatch(productOperations.fetchProductsList(Date));
  // }, [dispatch, Date]);

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
        <div className={`${styles.ProductEditorLabel}`}>
          <AsyncSelect
            placeholder="Введите название продукта*"
            style={`${styles.Select} `}
            cacheOptions
            defaultOptions
            styles={customStyles}
            width="300px"
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
          <div className={styles.ProductEditorInputWrapper}>
            <input
              className={`${styles.ProductEditorInput}  ${styles.ProductEditorInputKkal}`}
              type="number"
              placeholder="Граммы*"
              value={weight}
              onChange={handleChange}
              min={0}
            />
          </div>
        </label>
        <button type="submit" className={styles.ProductEditorButton}>
          {currentHideNav ? "+" : "Добавить"}
        </button>
      </form>
      <DiaryProductsList
        className={`${styles.ProductEditor} `}
        products={products}
      />
    </>
  );
}
