import spinerTypes from "../constants/spinerTypes";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case spinerTypes.LOADER_ON:
      return true;
    case spinerTypes.LOADER_OFF:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
