import React, { useState } from "react";
import axios from "axios";
import styles from "./DailyCaloriesForm.module.css";
import NavigationBar from "../../Components/NavigationBar";

import Modal from "../../Components/Modal";
import useModal from "../../Components/Modal/useModal";
import useForm from "./useForm";
import validate from "./validateForm";

const BludValue = {
  FIRST: "1",
  SECOND: "2",
  THIRD: "3",
  FOURTH: "4",
};

const DailyCalopiesForm = () => {
  const {
    values,
    errors,
    bludType,
    handleChange,
    handleSubmit,
    handleBludChange,
  } = useForm(getCalories, validate);

  const [calories, setCalories] = useState("");
  const [products, setProducts] = useState([]);

  function getCalories() {
    const data = JSON.stringify(values);
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .patch("https://slimmom.herokuapp.com/users/dailycalPublic", data, {
        headers,
      })
      .then((res) => {
        const { dayNormCalories, notAllowedCategories } = res.data;

        setCalories(dayNormCalories.toString());
        setProducts([...notAllowedCategories]);
      });
    // .catch((error) => {
    //   if (error) {
    //     console.log("its some errors ", error);
    //   }
    // })
  }

  const { isShowing, toggle } = useModal();

  return (
    <div className={styles.bgContainer}>
      <NavigationBar></NavigationBar>
      <div className={styles.container}>
        <h2 className={styles.form__title}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h2>
        <form className={styles.form} noValidate onSubmit={handleSubmit}>
          <div className={styles.form__inputs}>
            <input
              className={styles.input}
              type="text"
              name="height"
              value={values.height}
              placeholder="Рост *"
              onChange={handleChange}
              autoComplete="off"
            />

            {errors.height && <p className={styles.error}>{errors.height}</p>}

            <input
              className={styles.input}
              type="text"
              name="age"
              value={values.age}
              placeholder="Возраст *"
              onChange={handleChange}
              autoComplete="off"
            />

            {errors.age && <p className={styles.error}>{errors.age}</p>}

            <input
              className={styles.input}
              type="text"
              name="currentWeight"
              value={values.currentWeight}
              placeholder="Текущий вес *"
              onChange={handleChange}
              autoComplete="off"
            />

            {errors.currentWeight && (
              <p className={styles.error}>{errors.currentWeight}</p>
            )}

            <input
              className={styles.input}
              type="text"
              name="targetWeight"
              value={values.targetWeight}
              placeholder="Желаемый вес *"
              onChange={handleChange}
              autoComplete="off"
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
                    checked={bludType === BludValue.FIRST}
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
                    checked={bludType === BludValue.SECOND}
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
                    checked={bludType === BludValue.THIRD}
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
                    checked={bludType === BludValue.FOURTH}
                  />
                  <label htmlFor="radio-4" className={styles.radio_value}>
                    4
                  </label>
                </li>
              </ul>
              {errors.bloodType && (
                <p className={styles.error_blood}>{errors.bloodType}</p>
              )}
            </div>
          </div>

          <button
            className={styles.form_button}
            onClick={() => {
              getCalories();
              toggle();
            }}
          >
            Похудеть
          </button>
          <Modal
            isShowing={isShowing}
            hide={toggle}
            calories={calories}
            list={products}
          />
        </form>
      </div>
    </div>
  );
};

export default DailyCalopiesForm;
