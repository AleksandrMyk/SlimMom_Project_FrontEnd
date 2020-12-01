import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./register.module.css";
import useForm from "./useForm";
import validate from "./validationRules";
import Logo from "../../Components/Logo";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
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
        console.log(response);
        setMessage({
          data: "Registered , You will transfer to login page",
          type: "alert-success",
        });

        setTimeout(() => {
          history.push("/login");
          console.log("You are registered");
        }, 4000);
      })
      .catch((error) => {
        setMessage({
          data: "Wrong credentials",
          type: "alert-danger",
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
          <div className={`${style.messageContainer} `}>
            <div className={style.registrationFormContainer}>
              {message && (
                <div className={` ${message.type}`} role="alert">
                  {message.data}
                  <span
                    aria-hidden="true"
                    className={style.cursorPointer}
                    onClick={() => setMessage(null)}
                  >
                    &times;
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={style.formWrapper}>
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
