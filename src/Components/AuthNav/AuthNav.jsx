import React from "react";
import { NavLink } from "react-router-dom";

import s from "./AuthNav.module.css";

window.onclick = async function (event) {
  const authNavList = document.querySelectorAll(".authNavSpan");
  if (
    event.target.textContent === "Вход" ||
    event.target.textContent === "Регистрация"
  ) {
    authNavList.forEach((el) => el.classList.add("Hidden"));
  }
};

const AuthNav = () => (
  <div id="auth-nav-elem" className={s.navContainer}>
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

export default AuthNav;
