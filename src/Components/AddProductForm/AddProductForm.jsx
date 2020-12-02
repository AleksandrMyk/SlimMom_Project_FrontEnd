import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { useForm, useField } from "react-final-form-hooks";
import Select from "react-select";

import useDebounce from "./useDebounce";
import { useMediaQuery } from "./hooks";
import productOperations from "../../Redux/product/productOperations";
import styles from "./AddProductForm.module.css";

import aaa from "../../Redux/product/products";

const AddProductForm = () => {
  // Состояние и сеттер состояния для поискового запроса
  const [searchTerm, setSearchTerm] = useState("");
  // Состояние и сеттер состояния для результатов поиска
  const [results, setResults] = useState([]);
  // Состояние для статуса поиска (есть ли ожидающий запрос API)
  const [isSearching, setIsSearching] = useState(false);

  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const fetchProductApi = dispatch(productOperations.fetchProductsQuery());

  const onSubmit = useCallback(
    (e) => {
      //e.preventDefault();
      dispatch(productOperations.addProduct());
      setIsSubmitting(true);
      window.alert(JSON.stringify(e, 0, 2));
    },
    [dispatch]
  );

  const validate = (values) => {
    const errors = {};
    if (!values.nameProd) {
      errors.nameProd = "Required";
    }
    if (values.nameProd && RegExp("^[a-zA-Z0-9]+$").test(values.nameProd)) {
      errors.nameProd = "Введите продукт кириллицей";
    }
    if (!values.gramProd) {
      errors.gramProd = "Required";
    }
    if (values.gramProd && RegExp("^d+$").test(values.gramProd)) {
      errors.gramProd = "Введите цифры";
    }
    return errors;
  };

  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit,
    validate,
  });

  const nameProd = useField("nameProd", form);
  console.log("nameProd", nameProd);
  const gramProd = useField("gramProd", form);

  const debouncedSearchTerm = useDebounce(1, 500);
  //console.log(debouncedSearchTerm);
  useEffect(
    () => {
      // Убедиться что у нас есть значение (пользователь ввел что-то)
      if (debouncedSearchTerm) {
        // Выставить состояние isSearching
        setIsSearching(true);
        // Сделать запрос к АПИ
        //dispatch(productOperations.fetchProductsQuery(debouncedSearchTerm));
        // Выставить состояние в false, так-как запрос завершен
        setIsSearching(false);
        // Выставит состояние с результатом
        setResults(results);
      } else {
        setResults([]);
      }
    },
    // Это массив зависимостей useEffect
    // Хук useEffect сработает только если отложенное значение изменится ...
    // ... и спасибо нашему хуку, что оно изменится только тогда ...
    // когда значение searchTerm не менялось на протяжении 500ms.
    [debouncedSearchTerm]
  );

  const currentHideNav = useMediaQuery("(min-width: 767px)");
  return (
    <>
      <form onSubmit={handleSubmit} className={`${styles.ProductEditor} `}>
        <label className={`${styles.ProductEditorLabel} `}>
          <Select
            {...nameProd.input}
            options={results.map((result) => ({
              value: result.title.ru,
              label: result._id,
            }))}
            searchable
            name="nameProd"
            className={`${styles.ProductEditorInput} ${styles.ProductEditorInputName}`}
            placeholder="Введите название продукта*"
          />
          {nameProd.meta.error && nameProd.meta.touched && (
            <span className={`${styles.ProductEditorErrorMsg}`}>
              {nameProd.meta.error}
            </span>
          )}
        </label>

        <label className={`${styles.ProductEditorLabel} ${styles.Otstup}`}>
          <input
            name="gramProd"
            {...gramProd.input}
            className={`${styles.ProductEditorInput}  ${styles.ProductEditorInputKkal}`}
            type="number"
            placeholder="Граммы*"
          />
          {gramProd.meta.error && gramProd.meta.touched && (
            <span className={`${styles.ProductEditorErrorMsg}`}>
              {gramProd.meta.error}
            </span>
          )}
        </label>

        <button
          type="submit"
          onClick={form.reset}
          disabled={pristine || submitting}
          className={styles.ProductEditorButton}
        >
          {currentHideNav ? "+" : "Добавить"}
        </button>
      </form>
    </>
  );
};
export default AddProductForm;
