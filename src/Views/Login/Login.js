import React from "react";
import style from "./login.module.css";
import useForm from "./useForm";
import validate from "./validationRules";
import { NavLink } from "react-router-dom";
import Logo from "../../Components/Logo";

const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("You are logged in");
  }

  return (
    <>
      <nav>
        <div className={style.container}>
          <NavLink className={style.logoContainer} exact to="/">
            <Logo />
          </NavLink>

          <div className={style.navContainer}>
            <NavLink exact to="/login" className={style.login}>
              <span>Вход</span>
            </NavLink>
            <NavLink exact to="/register">
              <span>Регистрация</span>
            </NavLink>
          </div>
        </div>
      </nav>

      <div className={style.pageWrapper}>
        <div className={style.loginWrapper}>
          <div className={style.registerTitle}>вход</div>
          <form onSubmit={handleSubmit} noValidate>
            <div className={style.inputModule}>
              <input
                type="text"
                name="login"
                placeholder="Логин *"
                className={style.input}
                onChange={handleChange}
                value={values.login || ""}
                required
              />

              {errors.login && <p className={style.error}>{errors.login}</p>}

              <input
                autoComplete="nope"
                type="password"
                name="password"
                placeholder="Пароль *"
                className={style.input}
                onChange={handleChange}
                value={values.password || ""}
                required
              />

              {errors.password && (
                <p className={style.error}>{errors.password}</p>
              )}
            </div>

            <div className={style.butModule}>
              <button type="submit" className={style.activeButton}>
                Вход
              </button>
              <NavLink className={style.noActiveButton} exact to="/register">
                <span>Регистрация</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
