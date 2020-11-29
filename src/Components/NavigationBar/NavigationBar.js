// import React from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useMedia } from "react-media";

import { authSelectors } from "../../Redux/auth";

import Logo from "../Logo";
import AuthNav from "../AuthNav";
import UserNav from "../UserNav";
import UserInfo from "../UserInfo";
// import BurgerMenu from "../BurgerMenu";

import PropTypes from "prop-types";

import style from "./navigationbar.module.css";

//TODO:MOVE TO SEPARATE COMPONENT
const GLOBAL_MEDIA_QUERIES = {
  mobile: "(max-width: 766px)",
  tablet: "(min-width: 767px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

const NavigationBar = ({ isAuthenticated }) => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  return (
    <>
      <nav>
        <div className={style.container}>
          <NavLink className={style.logoContainer} exact to="/">
            <Logo></Logo>
          </NavLink>
          {isAuthenticated ? <UserNav /> : <AuthNav />}
          {/* {isAuthenticated && <UserNav />}
          {!isLoginPageLoaded && <AuthNav />} */}
          {isAuthenticated && !matches.mobile && <UserInfo />}
          {/* {isAuthenticated && !matches.desktop && <BurgerMenu />} */}
        </div>
        {isAuthenticated && (
          <div className={style.LowerUserInfoContainer}>
            <UserInfo />
          </div>
        )}
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(NavigationBar);

NavigationBar.propTypes = {
  isAuthenticated: PropTypes.any,
};
