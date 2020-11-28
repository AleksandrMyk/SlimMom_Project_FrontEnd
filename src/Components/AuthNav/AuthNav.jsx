import React from "react";
import { NavLink } from "react-router-dom";

import style from "./AuthNav.module.css";

const AuthNav = () => (
  <div className={style.navContainer}>
    <NavLink exact to="/login" className={style.login}>
      <span>Вход</span>
    </NavLink>
    <NavLink exact to="/register">
      <span>Регистрация</span>
    </NavLink>
  </div>
);

export default AuthNav;
