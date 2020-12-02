import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useForm, useField } from "react-final-form-hooks";
import { useMediaQuery } from "./hooks";
import productOperations from "../../Redux/product/productOperations";
import styles from "./AddProductForm.module.css";
import Calendar from "../Calendar";
import DiaryProductList from "../DiaryProductsList";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  const gramProd = useField("gramProd", form);

  const currentHideNav = useMediaQuery("(min-width: 767px)");
  return (
    <>
      <Calendar></Calendar>
      <form onSubmit={handleSubmit} className={`${styles.ProductEditor} `}>
        <label className={`${styles.ProductEditorLabel} `}>
          <input
            name="nameProd"
            {...nameProd.input}
            className={`${styles.ProductEditorInput} ${styles.ProductEditorInputName}`}
            type="text"
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
          disabled={pristine || submitting}
          className={styles.ProductEditorButton}
        >
          {currentHideNav ? "+" : "Добавить"}
        </button>
      </form>

      <DiaryProductList></DiaryProductList>
    </>
  );
};
export default AddProductForm;
