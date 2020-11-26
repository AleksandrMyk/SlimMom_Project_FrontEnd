import { combineReducers } from "redux";
import loadingReducer from "./spinerReducers";

const root = combineReducers({
  loading: loadingReducer,
});

export default root;
