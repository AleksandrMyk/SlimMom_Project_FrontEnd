import React from "react";
import style from "./DiaryProductLIstItem.module.css"
import {ReactComponent as RemoveIcon} from "./assets/remove.svg"
const DairyProductsListItem = ({ _id, title ,calories, weight, onRemove }) => (
 
    <li key={_id} className={style.listItem}>
      <span className={style.listItem__title}>{title}</span>
      <span className={style.listItem__weight}>{weight} г</span>
      <span className={style.listItem__calories}>{calories} ккaл</span>
      <span><button className={style.listItem__buttonRemove} onClick={()=>{ onRemove(_id)}}>
      <RemoveIcon />
      </button>
      </span>
    </li>
);


 
export default DairyProductsListItem;




