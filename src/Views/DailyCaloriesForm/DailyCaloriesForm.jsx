import React, { useState } from "react";
import styles from "./DailyCaloriesForm.module.css";
import NavigationBar from "../../Components/NavigationBar";

const BludValue = {
  FIRST: "1",
  SECOND: "2",
  THIRD: "3",
  FOURTH: "4",
};

const DailyCalopiesForm = () => {
  const [blud, setBlud] = useState(null);

  function handleBludChange(e) {
    setBlud(e.target.value);
  }

  return (
    <div className={styles.bgContainer}>
      <NavigationBar></NavigationBar>
      <div className={styles.container}>
        <h2 className={styles.form__title}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h2>
        <form className={styles.form}>
          <div className={styles.form__inputs}>
            <input
              className={styles.input}
              type="text"
              placeholder="Рост *"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Возраст *"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Текущий вес *"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Желаемый вес *"
              required
            />
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
                    checked={blud === BludValue.FIRST}
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
                    checked={blud === BludValue.SECOND}
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
                    checked={blud === BludValue.THIRD}
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
                    checked={blud === BludValue.FOURTH}
                  />
                  <label htmlFor="radio-4" className={styles.radio_value}>
                    4
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <button className={styles.form_button}>Похудеть</button>
        </form>
      </div>
    </div>
  );
};

export default DailyCalopiesForm;
