import React from "react";
import ModalRecomended from "../ModalRecomended";
import s from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={s.modal}>
      <ModalRecomended></ModalRecomended>
    </div>
  );
};

export default Modal;
