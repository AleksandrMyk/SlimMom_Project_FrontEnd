import { createAction } from "@reduxjs/toolkit";

//созд 3 actions для 1-ой операции
//request, suсcess, error
//который возвращает обьект {type: '....', payload: '.....'}

const addProductRequest = createAction("ADD_PRODUCT_REQUEST");
const addProductSuccess = createAction("ADD_PRODUCT_SUCCESS");
const addProductError = createAction("ADD_PRODUCT_ERROR");
<<<<<<< HEAD
const removeProductRequest = createAction("REMOVE_PRODUCT_REQUEST");
const removeProductSuccess = createAction("REMOVE_PRODUCT_SUCCESS");
const removeProductError = createAction("REMOVE_PRODUCT_ERROR");
=======
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a

export default {
  addProductRequest,
  addProductSuccess,
  addProductError,
<<<<<<< HEAD
  removeProductRequest,
  removeProductSuccess,
  removeProductError
=======
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a
};
