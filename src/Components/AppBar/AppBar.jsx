import React from "react";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import UserInfo from "../UserInfo/UserInfo";
import Logo from "../Logo/Logo";

import s from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <Logo />
        {isAuthenticated ? <UserNav /> : <AuthNav />}
      </div>
      {isAuthenticated && <UserInfo />}
    </header>
  );
};

export default AppBar;
