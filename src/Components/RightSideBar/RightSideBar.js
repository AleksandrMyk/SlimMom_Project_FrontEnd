import React from "react";
import { Spring } from "react-spring/renderprops";
import style from "./rightSideBar.module.css";
import UserInfo from "../../Components/UserInfo";

const RightSideBar = ({
  userName,
  logout,
  currentDate,
  consumed,
  norm,
  notAllow,
}) => {
  const percent = (consumed, norm) => {
    if (consumed === 0 && norm === 0) {
      return "0";
    }

    return `${Math.round(consumed / (norm / 100))}`;
  };

  const notAllowed = (array) => {
    if (array.length === 0) {
      return "Здесь будет отображаться Ваш рацион";
    }
    return `${array.toString()}`;
  };

  return (
    <>
      <section className={style.section}>
        <div className={style.userInfoContainer}>
          <UserInfo userName={userName} onLogout={logout} />
        </div>
        <Spring
          from={{ opacity: 0, marginLeft: -500 }}
          to={{ opacity: 1, marginLeft: 0 }}
          config={{ delay: 1500, duration: 1500 }}
        >
          {(props) => (
            <div style={props}>
              <div className={style.wrapper1}>
                <div className={style.listBox}>
                  <h2 className={style.ListTitle}>Сводка за {currentDate}</h2>
                  <div className={style.ulBox}>
                    <ul className={style.categoryList}>
                      <li className={style.categoryItems}>Осталось</li>
                      <li className={style.categoryItems}>Употреблено</li>
                      <li className={style.categoryItems}>Дневная норма</li>
                      <li className={style.categoryItems}>n% от нормы</li>
                    </ul>
                    <ul className={style.calorieList}>
                      <li className={style.categoryItems}>
                        {Math.round(norm - consumed)}ккал
                      </li>
                      <li className={style.categoryItems}>
                        {Math.round(consumed)}ккал
                      </li>
                      <li className={style.categoryItems}>
                        {Math.round(norm)}ккал
                      </li>
                      <li className={style.categoryItems}>
                        {percent(consumed, norm)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate(100%,0)" }}
          to={{ opacity: 1, transform: "translate(0%,0)" }}
          config={{ delay: 1500, duration: 1500 }}
        >
          {(props) => (
            <div style={props}>
              <div className={style.wrapper2}>
                <h2 className={style.ProductTitle}>Нерекомендуемые продукты</h2>
                <div className={style.productsBox}>
                  <p className={style.products}>{notAllowed(notAllow)}</p>
                </div>
              </div>
            </div>
          )}
        </Spring>
      </section>
    </>
  );
};
export default RightSideBar;
