import React from "react";
import style from "./rightSideBar.module.css";
import UserInfo from "../../Components/UserInfo";

const RightSideBar = ({ userName, logout }) => {
  return (
    <>
      <section className={style.section}>
        <div className={style.userInfoContainer}>
          <UserInfo userName={userName} onLogout={logout} />
        </div>
        <div className={style.wrapper1}>
          <div className={style.listBox}>
            <h2 className={style.ListTitle}>Сводка за 12.12.2012</h2>
            <div className={style.ulBox}>
              <ul className={style.categoryList}>
                <li className={style.categoryItems}>Осталось</li>
                <li className={style.categoryItems}>Употреблено</li>
                <li className={style.categoryItems}>Дневная норма</li>
                <li className={style.categoryItems}>n% от нормы</li>
              </ul>
              <ul className={style.calorieList}>
                <li className={style.categoryItems}>000ккал</li>
                <li className={style.categoryItems}>000ккал</li>
                <li className={style.categoryItems}>000ккал</li>
                <li className={style.categoryItems}>000ккал</li>
              </ul>
            </div>
          </div>
          <div className={style.wrapper2}>
            <h2 className={style.ProductTitle}>Нерекомендуемые продукты</h2>
            <div className={style.productsBox}>
              <p className={style.products}>
                Здесь будет отображаться Ваш рацион
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RightSideBar;
