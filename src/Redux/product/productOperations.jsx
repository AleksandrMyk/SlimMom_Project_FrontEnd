import axios from "axios";

import productActions from "./productActions";

const token = localStorage.getItem("token");
axios.defaults.baseURL = "https://slimmom.herokuapp.com";

//POST-запрос на добавление продукта
const addProduct = (productId, weight, date) => (dispatch) => {
  dispatch(productActions.addProductRequest()); //запрос на сервер
  //addProductRequest() это createAction возвращ обьект с {type: "ADD_PRODUCT"}
  axios
    .post("/days", { productId, weight, date })
    .then((response) => {
      return dispatch(productActions.addProductRequest(response.data)); //в action придет обьект response.data и запишется на св-во payload
    })
    .catch((error) => dispatch(productActions.addProductError(error)));
};

//GET-запрос на получение перечня продуктов по query строке

const fetchProductsQuery = (searchTerm) => (dispatch) => {
  dispatch(productActions.getProductRequest());
  axios
    .get(`/products?name=${searchTerm}&page=1&limit=10`)

    .then((response) => {
      return dispatch(productActions.getProductSuccess(response.data));
    })
    .catch((error) => dispatch(productActions.getProductError(error)));
};

export default {
  addProduct,
  fetchProductsQuery,
};
