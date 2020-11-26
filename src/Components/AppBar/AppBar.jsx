import React from "react";
import AuthNav from "../AuthNav/AuthNav";
import UserInfo from "../UserInfo/UserInfo";
// import { authSelectors } from "../../redux/auth";

import s from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => (
  <header className={s.header}>
    <div>SlimMamaProject</div>
    <AuthNav />
    <UserInfo />
    {/* {isAuthenticated ? <UserInfo /> : <AuthNav REGISTER AND LOGIN />} */}
  </header>
);

export default AppBar;
