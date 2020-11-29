import React from "react";
import { NavLink } from "react-router-dom";

import s from "./UserNav.module.css";

const UserNav = () => (
  <div className={s.navContainer}>
    <NavLink exact to="/dairy" className={s.login}>
      <span>Дневник</span>
    </NavLink>
    <NavLink exact to="/calculator">
      <span>Калькулятор</span>
    </NavLink>
  </div>

  // <nav className={s.container}>
  //   <NavLink
  //     to="/dairy"
  //     exact
  //     className={s.link}
  //     activeClassName={s.activeLink}
  //   >
  //     Дневник
  //   </NavLink>

  //   <NavLink
  //     to="/calculator"
  //     exact
  //     className={s.link}
  //     activeClassName={s.activeLink}
  //   >
  //     Калькулятор
  //   </NavLink>
  // </nav>
);

export default UserNav;
