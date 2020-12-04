import React from "react";
import ReactDOM from "react-dom";

import DailyCaloriesIntake from "../DailyCaloriesIntake";
import styles from "./Modal.module.css";

const Modal = ({ isShowing, hide }) =>
  isShowing
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
                  onClick={hide}
                ></button>
              </div>
              <DailyCaloriesIntake />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
