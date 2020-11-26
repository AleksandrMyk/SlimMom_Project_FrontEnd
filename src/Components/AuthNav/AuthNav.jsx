import React from "react";
import { NavLink } from "react-router-dom";

import s from "./AuthNav.module.css";

const AuthNav = () => (
  <nav className={s.container}>
    <NavLink
      to="/register"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Регистрация
    </NavLink>

    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Вход
    </NavLink>
  </nav>
);

export default AuthNav;
