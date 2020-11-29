import axios from "axios";
import productActions from "./productActions";

//axios.defaults.baseURL = "https://.????.herokuapp.com/";

const addProduct = (nameProd, gramProd) => (dispatch) => {
  dispatch(productActions.addProductRequest()); //запрос на сервер
  //addProductRequest() это createAction возвращ обьект с {type: "ADD_PRODUCT"}
  //и этот обьект диспатчится в Редусер
  axios
    .post("/products", { nameProd, gramProd })
    .then((response) => {
      return dispatch(productActions.addProductRequest(response.data)); //в action придет обьект response.data и запишется на св-во payload
    })
    .catch((error) => dispatch(productActions.addProductError(error)));
};

export default {
  addProduct,
};
