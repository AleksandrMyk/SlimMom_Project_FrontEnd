import React from "react";
import PropTypes from "prop-types";
import styles from "./DiaryProductsListItem.module.css";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";

const DiaryProductsListItem = ({ _id, product, calories }) => (
  <div className={styles.item}>
    <div className={styles.name}>{product.title.ru}</div>
    <div className={styles.weight}>{`${product.weight} г`}</div>
    <div className={styles.calories}>
      {calories} <span>ккал</span>
    </div>
    {/* <button
      className={styles.btn}
      onClick={() => {
        onRemove(id);
      }}
    >
      <RemoveIcon />
    </button> */}
  </div>
);

// DiaryProductsListItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   weight: PropTypes.string.isRequired,
//   calories: PropTypes.string.isRequired,
//   onRemove: PropTypes.func.isRequired,
// };

export default DiaryProductsListItem;
