import spinerTypes from "../constants/spinerTypes";

const loaderOn = () => ({
    type: spinerTypes.LOADER_ON,
  });
  
  const loaderOff = () => ({
    type: spinerTypes.LOADER_OFF,
  });
  
  export default {
    loaderOn,
    loaderOff,
  };