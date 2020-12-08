import React, { useState } from "react";
import style from "./login.module.css";
import useForm from "./useForm";
import validate from "./validationRules";
import { NavLink } from "react-router-dom";
import Logo from "../../Components/Logo";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./alertLoginStyle.css";

const LoginPage = () => {
  const history = useHistory();
  const [message, setMessage] = useState();
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    const data = JSON.stringify(values);
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("https://slimmom.herokuapp.com/users/login/", data, {
        headers,
      })
      .then((response) => {
        setMessage({
          data: "Успешный логин , перенаправление в личный кабинет",
          type: "sucess",
        });

        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          history.push("/dashboard");
        }, 1000);
      })
      .catch((error) => {
        setMessage({
          data: "Неправильные данные ",
          type: "danger",
        });
        console.error("There was an error!", error);
      });
  }

  return (
    <>
      <div className={style.pageWrapper}>
        <div className={style.loginWrapper}>
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

          <div className={style.formWrapper}>
            {message && (
              <div className={`popup ${message.type}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 50 50"
                >
                  <g transform="translate(-595.805 -678.805)">
                    <circle
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(595.805 678.805)"
                      fill="#fff"
                    />
                    <path
                      d="M2348.164,5670.065l5.524,5.523,9.476-9.476"
                      transform="translate(-1735.235 -4967.489)"
                      fill="none"
                      stroke="rgb(88, 206, 88)"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
                <p>{message.data}</p>
              </div>
            )}

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
      </div>
    </>
  );
};

export default LoginPage;
