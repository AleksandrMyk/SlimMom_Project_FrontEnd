import React from "react";
import { connect } from "react-redux";
import { useMedia } from "react-media";

import { authSelectors } from "../../Redux/auth";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import UserInfo from "../UserInfo/UserInfo";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/";

import PropTypes from "prop-types";

import s from "./AppBar.module.css";

const AppBar = ({ isAuthenticated }) => {
  const GLOBAL_MEDIA_QUERIES = {
    mobile: "(max-width: 766px)",
    tablet: "(min-width: 767px) and (max-width: 1023px)",
    desktop: "(min-width: 1024px)",
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  return (
    <>
      <div className={s.headerContainer}>
        <header className={s.header}>
          <div className={s.logoContainer}>
            <Logo />
            {isAuthenticated ? <UserNav /> : <AuthNav />}
          </div>
          {isAuthenticated && !matches.mobile && <UserInfo />}
          {isAuthenticated && !matches.desktop && <BurgerMenu />}
        </header>
      </div>
      {isAuthenticated && (
        <div className={s.LowerUserInfoContainer}>
          <UserInfo />
        </div>
      )}
    </>
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
/* {isAuthenticated && (
    <div className={s.UpperUserInfoContainer}>
      <UserInfo />
    </div>
  )} */
