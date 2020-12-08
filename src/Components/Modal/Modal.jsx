import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import DailyCaloriesIntake from "../DailyCaloriesIntake";
import Spiner from "../Spiner";
import styles from "./Modal.module.css";

const Modal = ({ isShowing, hide, calories, list }) => {
  useEffect(() => {
    function onKeyup(e) {
      if (e.keyCode === 27) {
        if (isShowing) {
          hide();
        }
      }
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [isShowing, hide]);

  return (
    <>
      {isShowing
        ? ReactDOM.createPortal(
            <React.Fragment>
              <div className={styles.modal_overlay} onClick={hide} />
              <div
                className={styles.modal_wrapper}
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <div className={styles.modal}>
                  <div className={styles.modal_header}>
                    <button
                      type="button"
                      className={styles.modal_close_button}
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={hide}
                    ></button>
                  </div>
                  {list.length === 0 ? (
                    <Spiner />
                  ) : (
                    <DailyCaloriesIntake ccal={calories} products={list} />
                  )}
                </div>
              </div>
            </React.Fragment>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;
