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
          {currentHideNav ? "+" : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
