import React from "react";
import { NavLink } from "react-router-dom";
import style from "./register.module.css";
import useForm from "./useForm";
import validate from "./validationRules";

const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("You are logged in");
  }

  return (
    <>
      <div className={style.pageWrapper}>
        <div className={style.loginWrapper}>
          <div className={style.registerTitle}>регистрация</div>
          <form onSubmit={handleSubmit} noValidate>
            <div className={style.inputModule}>
              <input
                type="text"
                name="name"
                placeholder="Имя *"
                className={style.input}
                onChange={handleChange}
                value={values.name || ""}
                required
              />

              {errors.name && <p className={style.error}>{errors.name}</p>}

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
              <NavLink className={style.noActiveButton} exact to="/login">
                <span>Вход</span>
              </NavLink>

              <button type="submit" className={style.activeButton}>
                Регистрация
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
