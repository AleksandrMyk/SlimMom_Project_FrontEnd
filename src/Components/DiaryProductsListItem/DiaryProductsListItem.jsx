import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./DiaryProductsListItem.module.css";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";

const DiaryProductsListItem = ({
  _id,
  product,
  totalCalories,
  totalWeight,
}) => {
  // useEffect(() => {}, [_id, product, totalCalories, totalWeight]);

  return (
    <div className={styles.item}>
      <div className={styles.name}>{product.title.ru}</div>
      <div className={styles.weight}>{`${totalWeight} г`}</div>
      <div className={styles.calories}>
        {totalCalories} <span>ккал</span>
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
};

// DiaryProductsListItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   weight: PropTypes.string.isRequired,
//   calories: PropTypes.string.isRequired,
//   onRemove: PropTypes.func.isRequired,
// };

export default DiaryProductsListItem;
