import React from "react";
import { connect } from "react-redux";
import style from "./DiaryProductLIstItem.module.css"
import productOperations from "../../Redux/product/productOperations"
import {ReactComponent as RemoveIcon} from "./assets/remove.svg"
const DairyProductsListItem = ({ _id, title ,calories, weight, onRemove }) => (
    <li key={_id} className={style.listItem}>
      <span className={style.listItem__title}>{title}</span>
      <span className={style.listItem__weight}>{weight} г</span>
      <span className={style.listItem__calories}>{calories} ккaл</span>
      <span><button className={style.listItem__buttonRemove} onClick={()=>onRemove(_id)}>
      <RemoveIcon />
      </button>
      </span>
    </li>
);


 

const MapDispatchToProps = {
  onRemove: productOperations.removeProduct,
};
export default connect(null, MapDispatchToProps)(DairyProductsListItem);

// export default DairyProductsListItem


