import Axios from "axios";
import axios from "axios";

import productActions from "./productActions";
const token = localStorage.getItem("token");
axios.defaults.baseURL = "https://slimmom.herokuapp.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

//POST-запрос на добавление продукта
const addProduct = (productId, weight, date) => (dispatch) => {
  const dateAddProd = {
    productId: productId,
    weight: weight,
    date: date,
  };

  dispatch(productActions.addProductRequest()); //запрос на сервер
  //addProductRequest() это createAction возвращ обьект с {type: "ADD_PRODUCT"}
  axios
    .post("/days", dateAddProd)
    .then((response) => {
      console.log("response", response);
      return dispatch(productActions.addProductSuccess(response.data)); //в action придет обьект response.data и запишется на св-во payload
    })
    .catch((error) => dispatch(productActions.addProductError(error)));
};

//GET-запрос на получение перечня продуктов по query строке

const fetchProductsQuery = (query) => (dispatch) => {
  dispatch(productActions.getProductRequest());
  axios
    .get(`/products?name=${query}&page=1&limit=10`)

    .then((response) => {
      return dispatch(productActions.getProductSuccess(response.data));
    })
    .catch((error) => dispatch(productActions.getProductError(error)));
};

//GET products list
const fetchProductsList = (date) => (dispatch) => {
  dispatch(productActions.addProductRequest());
  axios
    .get(`/days/${date}`)
    .then((response) => {
      console.log("response list products", response.data);
      return dispatch(productActions.getProductsListSuccess(response.data));
    })
    .catch((error) => dispatch(productActions.getProductsListError));
};

const removeProduct = (day) => (dispatch) => {
  dispatch(productActions.removeProductRequest());
  axios
    .delete(`/days/${day}`)
    .then(() => dispatch(productActions.removeProductSuccess(day)))
    .catch((error) => dispatch(productActions.removeProductError(error)));
};

export default {
  addProduct,
  fetchProductsQuery,
  fetchProductsList,
  removeProduct,
};
