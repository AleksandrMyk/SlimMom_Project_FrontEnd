import React from "react";
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
  const percent = `${Math.round(100 - (consumed / norm) * 100)}`;
  const notAllowed = notAllow.toString();
  return (
    <>
      <section className={style.section}>
        <div className={style.userInfoContainer}>
          <UserInfo userName={userName} onLogout={logout} />
        </div>
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
                <li className={style.categoryItems}>{Math.round(norm)}ккал</li>
                <li className={style.categoryItems}>{percent}</li>
              </ul>
            </div>
          </div>
          <div className={style.wrapper2}>
            <h2 className={style.ProductTitle}>Нерекомендуемые продукты</h2>
            <div className={style.productsBox}>
              <p className={style.products}>
                {notAllow ? notAllowed : "Здесь будет отображаться Ваш рацион"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RightSideBar;
