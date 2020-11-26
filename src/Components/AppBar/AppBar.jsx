import React from "react";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import UserInfo from "../UserInfo/UserInfo";
// import { authSelectors } from "../../redux/auth";

import s from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => (
  <header className={s.header}>
    <div>SlimMamaProject</div>

    <UserNav />
    <AuthNav />
    <UserInfo />
    {/* {isAuthenticated ? <UserInfo /> : <AuthNav />} */}
  </header>
);

export default AppBar;
