import { combineReducers } from "redux";
import loadingReducer from "./spinerReducers";

const root = combineReducers({
  loading: loadingReducer,
});

export default root;


const removeProduct = (id) => (dispatch) => {
  dispatch(ProductList.removeContactsRequest());
  Axios.delete(`/product/${id}`)
    .then(() => dispatch(ProductList.removeProductSuccess(id)))
    .catch((error) => dispatch(ProductList.removeProductSuccess()));
};
const item = createReducer([], {
  [ProductList.removeProductSuccess]: onRemoveContact,
});

const onRemoveProduct = (state, action) =>
  state.filter((product) => product.id !== action.payload);