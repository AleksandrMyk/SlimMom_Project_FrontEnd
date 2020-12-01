import { createAction } from "@reduxjs/toolkit";

//созд 3 actions для 1-ой операции
//request, suсcess, error
//который возвращает обьект {type: '....', payload: '.....'}

const addProductRequest = createAction("ADD_PRODUCT_REQUEST");
const addProductSuccess = createAction("ADD_PRODUCT_SUCCESS");
const addProductError = createAction("ADD_PRODUCT_ERROR");

export default {
  addProductRequest,
  addProductSuccess,
  addProductError,
};
