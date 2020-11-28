<<<<<<< HEAD
import React from "react";
import { useMediaQuery } from "./hooks";
import styles from "./AddProductForm.module.css";

export const AddProductForm = () => {
  const currentHideNav = useMediaQuery("(min-width: 767px)");
  return (
    <>
      <form className={`${styles.ProductEditor} `}>
        <label className={`${styles.ProductEditorLabel} `}>
          <input
            className={`${styles.ProductEditorInput} ${styles.ProductEditorInputName}`}
            type="text"
            data-row="name"
            placeholder="Введите название продукта*"
            required
          />
        </label>
        <label className={`${styles.ProductEditorLabel} ${styles.Otstup}`}>
          <input
            className={`${styles.ProductEditorInput}  ${styles.ProductEditorInputKkal}`}
            type="text"
            data-row="number"
            placeholder="Граммы*"
            required
          />
        </label>

        <button type="submit" className={styles.ProductEditorButton}>
=======
import React, { useState } from "react";
import { useForm, useField } from "react-final-form-hooks";

import { useMediaQuery } from "./hooks";
import styles from "./AddProductForm.module.css";
const AddProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = (e) => {
    //e.preventDefault();
    setIsSubmitting(true);
    window.alert(JSON.stringify(e, 0, 2));
  };

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
>>>>>>> 30ab79f4dc2725d9d1d7243915c3647c4d068d6d
          {currentHideNav ? "+" : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
