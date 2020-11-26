import React from "react";
import style from "./register.module.css";

const Register = () => {
  return (
    <>
      <div className={style.pageWrapper}>
        <div className={style.loginWrapper}>
          <div className={style.registerTitle}>регистрация</div>
          <form>
            <div className={style.inputModule}>
              <input
                type="text"
                name="name"
                placeholder="Имя *"
                className={style.input}
              />

              <input
                type="text"
                name="login"
                placeholder="Логин *"
                className={style.input}
              />

              <input
                autoComplete="nope"
                type="password"
                name="password"
                placeholder="Пароль *"
                className={style.input}
              />
            </div>

            <div className={style.butModule}>
              <button className={style.activeButton}>Вход</button>
              <button className={style.noActiveButton}>Регистрация</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
