import axios from "axios";
import productActions from "./productActions";

axios.defaults.baseURL = "https://slimmom.herokuapp.com/";

const addProduct = (nameProd, gramProd) => (dispatch) => {
  dispatch(productActions.addProductRequest()); //запрос на сервер
  //addProductRequest() это createAction возвращ обьект с {type: "ADD_PRODUCT"}
  axios
    .post("/products", { nameProd, gramProd })
    .then((response) => {
      return dispatch(productActions.addProductRequest(response.data)); //в action придет обьект response.data и запишется на св-во payload
    })
    .catch((error) => dispatch(productActions.addProductError(error)));
};
const removeProduct = (id) => (dispatch) => {
  dispatch(productActions.removeProductRequest());
  axios.delete(`/products/${id}`)
    .then(() => dispatch(productActions.removeProductSuccess(id)))
    .catch((error) => dispatch(productActions.removeProductError()));
};
export default {
  addProduct,
  removeProduct
};
