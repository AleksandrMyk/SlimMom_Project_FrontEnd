import React, { useState, useCallback, useEffect, useContext } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import Calendar from "../../Components/Calendar";
import styles from "./AddProductForm.module.css";
import DiaryProductsList from "../../Components/DiaryProductsList";
import { useMediaQuery } from "./hooks";
import { DateContext } from "../../dateContext";

const SEARCH_URL = "https://slimmom.herokuapp.com/";
const END_OPTIONS = "&page=1&limit=10";
const QUERY = `products?name=`;

export default function AddProductForm() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [productId, setIdProduct] = useState("");
  const [weight, setGramProd] = useState("");
  const [products, setProducts] = useState(null);
  const token = localStorage.getItem("token");

  const data = useContext(DateContext);

  const customStyles = {
    container: (_, { selectProps: { width } }) => ({
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

    valueContainer: (_, { selectProps: { width } }) => ({
      width: width,
      display: "flex",
      alignItems: "center",
      paddingTop: 4,
      paddingBottom: 4,
      flexWrap: "wrap",
      height: 60,
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
      display: "flex",
      alignItems: "center",
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

  const convertedDate = (date) => {
    if (date.getDate() < 10) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const dateToSend = convertedDate(data.date);

  const addNewItem = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    const data = {
      productId: productId,
      weight: weight,
      date: dateToSend,
    };
    let dataToSend = JSON.stringify(data);
    axios
      .post("https://slimmom.herokuapp.com/days", dataToSend, {
        headers,
      })
      .then((response) => {
        getCurrentdayProductList(dateToSend);
      })
      .catch((error) => {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem();
  };

  const getCurrentdayProductList = (day) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get(`https://slimmom.herokuapp.com/days/${day}`, {
        headers,
      })
      .then((response) => {
        const dayCalories = response.data.reduce(
          (acc, el) => acc + el.totalCalories,
          0
        );
        data.setconsumed(dayCalories);

        setProducts(response.data);
      })
      .catch((error) => {
        if (error) {
          setProducts(null);
          data.setconsumed(0);
        }
      });
  };

  useEffect(() => {
    getCurrentdayProductList(dateToSend);
  }, [dateToSend]);

  const handleChange = useCallback(
    (e) => setGramProd(Number(e.currentTarget.value)),
    []
  );

  const handleSearchTitles = (movieTitle) => {
    let searchTerm = movieTitle;

    if (!movieTitle || movieTitle === " ") {
      searchTerm = "";
    }

    const urlRequest = `${SEARCH_URL}${QUERY}${searchTerm}${END_OPTIONS}`;
    const newRequest = axios.get(urlRequest);

    if (newRequest) {
      return newRequest.then((response) => {
        const compare = response.data.docs.filter((i) =>
          i.title.ru.toLowerCase().includes(movieTitle.toLowerCase())
        );
        return compare.map((prod) => ({
          label: prod.title.ru,
          value: prod._id,
        }));
      });
    }
  };

  const removeItem = (id, token) => {
    const data = {
      dayId: id,
    };
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    };
    fetch("https://slimmom.herokuapp.com/days", requestOptions)
      .then((response) => {
        getCurrentdayProductList(dateToSend);
      })
      .catch((error) => {});
  };

  //
  const showDairyIfnoMobile = `{products ? (
  <DiaryProductsList removeItem={removeItem} products={products} />
) : (
  "Cписок продуктов пустой"
)};`;

  const tabletView = useMediaQuery("(min-width: 767px)");
  return (
    <>
      {/* {tabletView && <Calendar></Calendar>} */}
      <Calendar />
      <div className={styles.ProductEditorOuterWrapper}>
        <form className={`${styles.ProductEditor} `} onSubmit={handleSubmit}>
          <div className={`${styles.ProductEditorLabel} `}>
            <AsyncSelect
              placeholder="Введите название продукта"
              cacheOptions
              defaultOptions
              styles={customStyles}
              width="250px"
              value={selectedTitle}
              loadOptions={handleSearchTitles}
              onChange={(property, value) => {
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
                placeholder="Граммы"
                value={weight}
                onChange={handleChange}
                min={0}
              />
            </div>
          </label>
          <button type="submit" className={styles.ProductEditorButton}>
            {tabletView ? "+" : "Добавить"}
          </button>
        </form>
      </div>
      {/* {tabletView && (
        <div>
          {products ? (
            <DiaryProductsList removeItem={removeItem} products={products} />
          ) : (
            "Cписок продуктов пустой"
          )}
        </div>
      )} */}

      {products ? (
        <DiaryProductsList removeItem={removeItem} products={products} />
      ) : (
        "Cписок продуктов пустой"
      )}
    </>
  );
}
