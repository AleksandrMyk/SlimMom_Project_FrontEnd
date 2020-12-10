import React, { useState, useContext } from "react";
import styles from "./Calculator.module.css";
import useForm from "./useForm";
import validate from "./validationRules";
import { useHistory } from "react-router-dom";
import { DateContext } from "../../dateContext";
import axios from "axios";
import "./alertSendData.css";

const BludValue = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
};

const Calculator = () => {
  const data = useContext(DateContext);
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBludChange,
  } = useForm(send, validate);

  const getCurrentUserData = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get("https://slimmom.herokuapp.com/users/getuser", {
        headers,
      })
      .then((response) => {
        data.setdailyNorm(response.data.user.dayNormCalories);
        data.setprohibited(response.data.user.notAllowedCategories);
      })
      .catch((error) => {
        if (error) {
          history.push("/login");
          localStorage.removeItem("token");
        }
      });
  };

  function send() {
    const data = JSON.stringify(values);
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .patch("https://slimmom.herokuapp.com/users/dailycalPrivate", data, {
        headers,
      })
      .then((response) => {
        setMessage({
          data: "Вы успешно обновили данные !!!",
          type: "sucess",
        });
        getCurrentUserData();
      })
      .catch((error) => {
        if (error) {
          setMessage({
            data: "Что-то пошло не так ",
            type: "danger",
          });
          history.push("/login");
        }
      });
  }

  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        {message && (
          <div
            onClick={() => setMessage(null)}
            className={`popup ${message.type}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <g transform="translate(-595.805 -678.805)">
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                  transform="translate(595.805 678.805)"
                  fill="#fff"
                />
                <path
                  d="M2348.164,5670.065l5.524,5.523,9.476-9.476"
                  transform="translate(-1735.235 -4967.489)"
                  fill="none"
                  stroke="rgb(88, 206, 88)"
                  strokeWidth="4"
                />
              </g>
            </svg>
            <p>{message.data}</p>
          </div>
        )}

        <h2 className={styles.form__title}>
          Узнай свою суточную норму калорий
        </h2>
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <div className={styles.form__inputs}>
            <input
              className={styles.input}
              type="text"
              name="height"
              placeholder="Рост *"
              onChange={handleChange}
              value={values.height || ""}
              required
            />
            {errors.height && <p className={styles.error}>{errors.height}</p>}
            <input
              className={styles.input}
              type="text"
              name="age"
              placeholder="Возраст *"
              onChange={handleChange}
              value={values.age || ""}
              required
            />
            {errors.age && <p className={styles.error}>{errors.age}</p>}
            <input
              className={styles.input}
              type="text"
              name="currentWeight"
              placeholder="Текущий вес *"
              onChange={handleChange}
              value={values.currentWeight || ""}
              required
            />
            {errors.currentWeight && (
              <p className={styles.error}>{errors.currentWeight}</p>
            )}
            <input
              className={styles.input}
              type="text"
              name="targetWeight"
              placeholder="Желаемый вес *"
              onChange={handleChange}
              value={values.targetWeight || ""}
              required
            />
            {errors.targetWeight && (
              <p className={styles.error}>{errors.targetWeight}</p>
            )}
            <div className={styles.radio_buttons}>
              <span className={styles.blud}>Группа крови *</span>
              <ul className={styles.radio_list}>
                <li className={styles.radio_item}>
                  <input
                    id="radio-1"
                    className={styles.radio_input}
                    type="radio"
                    value={BludValue.FIRST}
                    onChange={handleBludChange}
                    checked={values.bloodType === BludValue.FIRST}
                  />
                  <label htmlFor="radio-1" className={styles.radio_value}>
                    1
                  </label>
                </li>
                <li className={styles.radio_item}>
                  <input
                    id="radio-2"
                    className={styles.radio_input}
                    type="radio"
                    value={BludValue.SECOND}
                    onChange={handleBludChange}
                    checked={values.bloodType === BludValue.SECOND}
                  />
                  <label htmlFor="radio-2" className={styles.radio_value}>
                    2
                  </label>
                </li>
                <li className={styles.radio_item}>
                  <input
                    id="radio-3"
                    className={styles.radio_input}
                    type="radio"
                    value={BludValue.THIRD}
                    onChange={handleBludChange}
                    checked={values.bloodType === BludValue.THIRD}
                  />
                  <label htmlFor="radio-3" className={styles.radio_value}>
                    3
                  </label>
                </li>
                <li className={styles.radio_item}>
                  <input
                    id="radio-4"
                    className={styles.radio_input}
                    type="radio"
                    value={BludValue.FOURTH}
                    onChange={handleBludChange}
                    checked={values.bloodType === BludValue.FOURTH}
                  />
                  <label htmlFor="radio-4" className={styles.radio_value}>
                    4
                  </label>
                </li>
              </ul>
              {errors.bloodType && (
                <p className={styles.error}>{errors.bloodType}</p>
              )}
            </div>
          </div>
          <button type="submit" className={styles.form_button}>
            Похудеть
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
