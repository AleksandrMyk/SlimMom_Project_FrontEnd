import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
// import UserInfo from "../UserInfo/UserInfo";
import Logo from "../Logo/Logo";
import { authSelectors } from "../../Redux/auth";
import style from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => (
  <nav>
    <div className={style.container}>
      <NavLink className={style.logoContainer} exact to="/">
        <Logo />
      </NavLink>

      {/* <Navigation /> */}
      {isAuthenticated ? <UserNav /> : <AuthNav />}
    </div>
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
