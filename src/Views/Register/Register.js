import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./register.module.css";
import useForm from "./useForm";
import validate from "./validationRules";
import Logo from "../../Components/Logo";
import axios from "axios";
import "./alertStyle.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [message, setMessage] = useState();

  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
    validate
  );

  function register() {
    const data = JSON.stringify(values);
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("https://slimmom.herokuapp.com/users/register/", data, {
        headers,
      })
      .then((response) => {
        setMessage({
          data: "Вы успешно зарегестрировались на сайте",
          type: "success",
        });

        setTimeout(() => {
          history.push("/login");
        }, 4000);
      })
      .catch((error) => {
        setMessage({
          data: "Произошла ошибка , попробуйте еще раз",
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

            <div className={style.registerTitle}>Регистрация</div>
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
      </div>
    </>
  );
};

export default Register;
