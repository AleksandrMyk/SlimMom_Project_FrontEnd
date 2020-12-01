import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import AuthNav from "../AuthNav";
import style from "./navigationbar.module.css";
// import { connect } from "react-redux";
// import { useMedia } from "react-media";
// import { authSelectors } from "../../Redux/auth";

const NavigationBar = () => {
  //TODO:MOVE TO SEPARATE COMPONENT
  // const GLOBAL_MEDIA_QUERIES = {
  //   mobile: "(max-width: 766px)",
  //   tablet: "(min-width: 767px) and (max-width: 1023px)",
  //   desktop: "(min-width: 1024px)",
  // };

  // const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

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
