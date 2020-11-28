import React from "react";
import { connect } from "react-redux";

import { authSelectors } from "../../Redux/auth";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import UserInfo from "../UserInfo/UserInfo";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/";

import PropTypes from "prop-types";

import s from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => {
  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <div className={s.logoContainer}>
          <Logo />
          {isAuthenticated ? <UserNav /> : <AuthNav />}
        </div>
        {isAuthenticated && <UserInfo />}
        {isAuthenticated && <BurgerMenu />}
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

AppBar.propTypes = {
  isAuthenticated: PropTypes.any,
};

// export default AppBar;
