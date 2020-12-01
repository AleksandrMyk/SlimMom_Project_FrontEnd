import React from "react";
import { NavLink } from "react-router-dom";

import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.navContainer}>
      <NavLink exact to="/login" className={s.login}>
        <span className={s.Span}>Вход</span>
      </NavLink>
      <NavLink exact to="/register">
        <span className={s.Span}>Регистрация</span>
      </NavLink>
    </div>
  );
};

export default AuthNav;
