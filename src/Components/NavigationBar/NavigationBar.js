import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navigationbar.module.css";
import Logo from "../Logo";

const NavigationBar = () => {
  return (
    <>
      <nav>
        <div className={style.container}>
          <NavLink className={style.logoContainer} exact to="/">
            <Logo></Logo>
          </NavLink>
          <div className={style.navContainer}>
            <NavLink
              activeClassName={style.active}
              exact
              to="/login"
              className={style.login}
            >
              <span>Вход</span>
            </NavLink>
            <NavLink activeClassName={style.active} exact to="/register">
              <span>Регистрация</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
