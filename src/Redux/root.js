import { combineReducers } from "redux";
import loadingReducer from "./Spiner/spinerReducers";

const root = combineReducers({
  loading: loadingReducer,
});

export default root;
