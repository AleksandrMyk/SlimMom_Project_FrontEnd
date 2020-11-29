import React from "react";
import { NavLink } from "react-router-dom";

import s from "./UserNav.module.css";

const UserNav = () => (
<<<<<<< HEAD
  <nav className={s.container}>
    <NavLink
      to="/diary"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Дневник
=======
  <div className={s.navContainer}>
    <NavLink exact to="/dairy" className={s.login}>
      <span>Дневник</span>
>>>>>>> ccb2819c9dd5437afcfa1b06e143efe29e1700e5
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
