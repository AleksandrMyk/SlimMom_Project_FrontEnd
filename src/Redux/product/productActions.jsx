import { createAction } from "@reduxjs/toolkit";

//созд 3 actions для 1-ой операции
//request, suсcess, error
//который возвращает обьект {type: '....', payload: '.....'}

const addProductRequest = createAction("ADD_PRODUCT_REQUEST");
const addProductSuccess = createAction("ADD_PRODUCT_SUCCESS");
const addProductError = createAction("ADD_PRODUCT_ERROR");

const getProductRequest = createAction("GET_PRODUCT_REQUEST");
const getProductSuccess = createAction("GET_PRODUCT_SUCCESS");
const getProductError = createAction("GET_PRODUCT_ERROR");


const removeProductRequest = createAction("REMOVE_PRODUCT_REQUEST");
const removeProductSuccess = createAction("REMOVE_PRODUCT_SUCCESS");
const removeProductError = createAction("REMOVE_PRODUCT_ERROR");


export default {
  addProductRequest,
  addProductSuccess,
  addProductError,
  getProductRequest,
  getProductSuccess,
  getProductError,
  removeProductRequest,
  removeProductSuccess,
  removeProductError,
};
