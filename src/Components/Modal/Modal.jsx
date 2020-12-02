import React from "react";
import ReactDOM from "react-dom";

import DailyCaloriesIntake from "../DailyCaloriesIntake";
import styles from "./Modal.module.css";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.modal_overlay} />
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
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <DailyCaloriesIntake />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
