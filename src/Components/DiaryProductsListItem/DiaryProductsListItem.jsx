import React from "react";
import { Spring } from "react-spring/renderprops";
import styles from "./DiaryProductsListItem.module.css";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";

const DiaryProductsListItem = ({
  _id,
  product,
  totalCalories,
  totalWeight,
  onRemove,
}) => {
  const token = localStorage.getItem("token");

  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div className={styles.item}>
            <div className={styles.name}>{product.title.ru}</div>
            <div className={styles.weight}>{`${totalWeight} г`}</div>
            <div className={styles.calories}>
              {totalCalories} <span>ккал</span>
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                onRemove(_id, token);
              }}
            >
              <RemoveIcon />
            </button>
          </div>
    //     </div>
      )}
    </Spring>
  );
};

export default DiaryProductsListItem;
