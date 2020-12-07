import React from "react";
// import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
import style from "./MainNavigation.module.css"


const MainNavigation =()=>{
  return (
    <div className={style.wrapperNavigation}>
    <NavLink to="/" exact> 
  </NavLink>
  <br />
  <NavLink to="/login" exact className = {style.login}>
    вход
  </NavLink>
  <br />
  <NavLink to="/registration" exact className = {style.register}>
    регистрация
  </NavLink>
 

  </div>
  )
}


  export default MainNavigation;