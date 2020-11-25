import React from "react";
import Loader from "react-loader-spinner";
import style from "./Spiner.module.css";

const Spiner = () => {
  return (
    <Loader
      className={style.loader}
      type="ThreeDots"
      color="#FC842D"
      height={100}
      width={100}
    />
  );
};
export default Spiner;