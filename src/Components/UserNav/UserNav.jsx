import React from "react";
import { NavLink } from "react-router-dom";

import s from "./UserNav.module.css";

const UserNav = () => (
  <nav className={s.container}>
    <NavLink
      to="/diary"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Дневник
    </NavLink>

    <NavLink
      to="/calculator"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Калькулятор
    </NavLink>
  </nav>
);

export default UserNav;
