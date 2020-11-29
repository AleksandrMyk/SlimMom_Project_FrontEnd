import React from "react";
import { NavLink } from "react-router-dom";

import s from "./AuthNav.module.css";

const AuthNav = () => {
  // const isLoginPageLoaded = document.getElementById("logoPadeId");

  // if (isLoginPageLoaded) {
  //   const authNavList = document.querySelectorAll(".authNavSpan");
  //   authNavList.forEach((el) => el.classList.add("Hidden"));
  // }

  // window.onclick = async function (event) {
  //   const authNavList = document.querySelectorAll(".authNavSpan");
  //   if (
  //     event.target.textContent === "Вход" ||
  //     event.target.textContent === "Регистрация"
  //   ) {
  //     authNavList.forEach((el) => el.classList.add("Hidden"));
  //   }
  // };

  return (
    <div className={s.navContainer}>
      <NavLink exact to="/login" className={s.login}>
        <span className="authNavSpan">Вход</span>
      </NavLink>
      <NavLink exact to="/register">
        <span className="authNavSpan">Регистрация</span>
      </NavLink>
    </div>

    // <nav className={s.container}>
    //   <NavLink
    //     to="/register"
    //     exact
    //     className={s.link}
    //     activeClassName={s.activeLink}
    //   >
    //     Регистрация
    //   </NavLink>

    //   <NavLink
    //     to="/login"
    //     exact
    //     className={s.link}
    //     activeClassName={s.activeLink}
    //   >
    //     Вход
    //   </NavLink>
    // </nav>
  );
};

export default AuthNav;
