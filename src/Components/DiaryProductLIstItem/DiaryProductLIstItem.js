import React from "react";
import product from "./products.json"
import style from "./DiaryProductLIstItem.module.css"
console.log(product)
const DairyProductsListItem = ({ _id, title,calories, weight, onRemovePersonData }) => (
  <div className={style.wrapper__listItem}>
    <tr key={_id} className={style.listItem}>
      <td className={style.listItem__title}>{title}</td>
      <td className={style.listItem__weight}>{weight} г</td>
      <td className={style.listItem__calories}>{calories} ккал</td>
      <td><button className={style.buttonRemove} onClick={onRemovePersonData}>
        ✕
      </button>
      </td>
    </tr>
    </div>
);

export default DairyProductsListItem;


// const removeProduct = (id) => (dispatch) => {
//   dispatch(ProductList.removeContactsRequest());
//   Axios.delete(`/product/${id}`)
//     .then(() => dispatch(ProductList.removeProductSuccess(id)))
//     .catch((error) => dispatch(ProductList.removeProductSuccess()));
// };
// const item = createReducer([], {
//   [ProductList.removeProductSuccess]: onRemoveContact,
// });

// const onRemoveProduct = (state, action) =>
//   state.filter((product) => product.id !== action.payload);