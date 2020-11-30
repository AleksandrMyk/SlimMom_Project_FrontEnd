import React from "react";
import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import style from "./AppBar.module.css";

const AppBar = () => (
  <nav>
    <div className={style.container}>
      <NavLink className={style.logoContainer} exact to="/">
        <Logo />
      </NavLink>
      <AuthNav />
    </div>
  </nav>
);

export default AppBar;
