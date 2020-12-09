import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import AuthNav from "../AuthNav";
import style from "./navigationbar.module.css";

const NavigationBar = () => {
  return (
    <>
      <nav>
        <div className={style.container}>
          <NavLink className={style.logoContainer} exact to="/">
            <Logo />
          </NavLink>
          <AuthNav />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
