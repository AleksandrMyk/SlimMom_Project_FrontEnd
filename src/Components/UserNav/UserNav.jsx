import React from "react";
import { NavLink } from "react-router-dom";

import s from "./UserNav.module.css";

const UserNav = () => (
  <div className={s.navContainer}>
    <NavLink exact to="/dashboard/diary" className={s.login}>
      <span className={s.Span}>Дневник</span>
    </NavLink>
    <NavLink exact to="/dashboard">
      <span className={s.Span}>Калькулятор</span>
    </NavLink>
  </div>
);

export default UserNav;
