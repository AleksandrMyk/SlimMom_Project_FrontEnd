import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { useForm, useField } from "react-final-form-hooks";
import Select from "react-select";

import useDebounce from "./usedebounce-hook";
import useMediaQuery from "./usemedia-hook";
import productOperations from "../../Redux/product/productOperations";
import styles from "./AddProductForm.module.css";

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

const options = [
  { label: "aaaa", value: "яйца" },
  { label: 2021, value: 2021 },
  { label: 2020, value: 2020 },
  { label: 2019, value: 2019 },
  { label: 2018, value: 2018 },
  { label: 2017, value: 2017 },
  { label: 2016, value: 2016 },
  { label: 2015, value: 2015 },
  { label: 2014, value: 2014 },
  { label: 2013, value: 2013 },
  { label: 2012, value: 2012 },
  { label: 2011, value: 2011 },
  { label: 2010, value: 2010 },
  { label: 2009, value: 2009 },
  { label: 2008, value: 2008 },
  { label: 2007, value: 2007 },
  { label: 2006, value: 2006 },
  { label: 2005, value: 2005 },
  { label: 2004, value: 2004 },
  { label: 2003, value: 2003 },
  { label: 2002, value: 2002 },
  { label: 2001, value: 2001 },
  { label: 2000, value: 2000 },
];

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
    console.log("values.nameProd", values.nameProd);
    if (!values.nameProd) {
      errors.nameProd = "Required";
    }
    if (
      values.nameProd &&
      RegExp("^[a-zA-Z0-9]+$").test(values.nameProd.value)
    ) {
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
  const gramProd = useField("gramProd", form);

  const debouncedSearchTerm = useDebounce(1, 500);

  useEffect(() => {
    // Убедиться что у нас есть значение (пользователь ввел что-то)
    if (debouncedSearchTerm) {
      // Выставить состояние isSearching
      setIsSearching(true);
      // Сделать запрос к АПИ

      dispatch(productOperations.fetchProductsQuery(debouncedSearchTerm));
      // Выставить состояние в false, так-как запрос завершен
      setIsSearching(false);
      // Выставит состояние с результатом
      setResults(results);
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const currentHideNav = useMediaQuery("(min-width: 767px)");
  const currentWidth = currentHideNav ? "100px" : "300px";
  return (
    <>
      <form onChange={handleSubmit} className={`${styles.ProductEditor} `}>
        {/* <form onSubmit={handleSubmit} className={`${styles.ProductEditor} `}> */}
        <label className={`${styles.ProductEditorLabel} `}>
          <Select
            {...nameProd.input}
            options={options}
            name="nameProd"
            styles={customStyles}
            width="300px"
            type="text"
            placeholder="Введите название продукта"
          />
          {nameProd.meta.error && nameProd.meta.touched && (
            <span className={`${styles.ProductEditorErrorMsg}`}>
              {nameProd.meta.error}
            </span>
          )}
        </label>

        <label className={`${styles.ProductEditorLabel} ${styles.Otstup}`}>
          <Select
            {...gramProd.input}
            options={options}
            name="gramProd"
            styles={customStyles}
            width={currentWidth}
            type="number"
            placeholder="Граммы"
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
      <div className={`${styles.ProductEditor} `}>Место списка</div>
    </>
  );
};
export default AddProductForm;
