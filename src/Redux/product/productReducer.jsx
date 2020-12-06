import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import productActions from "./productActions";

const handleAddProduct = (state, action) => [...state, action.payload];
const handleRemoveProduct = (state, action) =>
  state.filter((product) => product._id !== action.payload);
const itemsReducer = createReducer([], {
  [productActions.addProductSuccess]: handleAddProduct,
  [productActions.removeProductSuccess]: handleRemoveProduct,

});

const errorReducer = createReducer("", {
  [productActions.addProductError]: (state, action) => action.payload,
});
//для отображения спинера созд редусер изменения состояния
const loading = createReducer(false, {
  //отобр спинера при добавлении нового контакта
  [productActions.addProductRequest]: (state, action) => true,
  [productActions.addProductSuccess]: (state, action) => false,
  [productActions.addProductError]: (state, action) => false,
});

//для отображения ошибки
const error = createReducer(false, {
  //отобр спинера при добавлении нового контакта
  [productActions.addProductRequest]: (state, action) => false,
  [productActions.addProductSuccess]: (state, action) => false,
  [productActions.addProductError]: (state, action) => true,
});
export default combineReducers({
  items: itemsReducer,
  loading: loading,
  error: error,
  error_message: errorReducer,
});
