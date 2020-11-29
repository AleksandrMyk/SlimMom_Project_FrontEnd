import React from "react";
import { connect } from "react-redux";
import productOperations from "../../Redux/product/productOperations";
import style from "./DiaryProductLIstItem.module.css"
const DairyProductsListItem = ({ _id, title,calories, weight, onRemoveProduct }) => (
 
  <div className={style.wrapper__listItem}>
    <li key={_id} className={style.listItem}>
      <span className={style.listItem__title}>{title}</span>
      <span className={style.listItem__weight}>{weight} г</span>
      <span className={style.listItem__calories}>{calories} ккал</span>
      <span><button className={style.buttonRemove} onClick={onRemoveProduct}>
        ✕
      </button>
      </span>
    </li>
    </div>
);

const MapDispatchToProps = {
  onRemoveProduct: productOperations.removeProduct
}; 
export default connect(null, MapDispatchToProps)(DairyProductsListItem);




