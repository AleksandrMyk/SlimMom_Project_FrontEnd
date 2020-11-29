import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./register.module.css";
// import useForm from "./useForm";
// import validate from "./validationRules";
import Logo from "../../Components/Logo";
import { compose } from "redux";
import { connect } from "react-redux";
import withAuthRedirect from "../../CustomRoutes/hoc/withAuthRedirect";
import { authOperations } from "../../Redux/auth";

// const Register = (props) => {
//   const { values, errors, handleChange, handleSubmit } = useForm(
//     login,
//     validate
//   );

//   function login() {
//     const credentials = JSON.stringify({
//       name: values.name,
//       login: values.login,
//       password: values.password,
//     });

//     console.log(credentials);
//     props.onRegister(credentials);
//     // console.log("Success");
//   }

//   return (
//     <>
//       <nav>
//         <div className={style.container}>
//           <NavLink className={style.logoContainer} exact to="/">
//             <Logo />
//           </NavLink>

//           <div className={style.navContainer}>
//             <NavLink exact to="/login" className={style.login}>
//               <span>Вход</span>
//             </NavLink>
//             <NavLink exact to="/register">
//               <span>Регистрация</span>
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       <div className={style.pageWrapper}>
//         <div className={style.loginWrapper}>
//           <div className={style.registerTitle}>регистрация</div>
//           <form onSubmit={handleSubmit} noValidate>
//             <div className={style.inputModule}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Имя *"
//                 className={style.input}
//                 onChange={handleChange}
//                 value={values.name || ""}
//                 required
//               />

//               {errors.name && <p className={style.error}>{errors.name}</p>}

//               <input
//                 type="text"
//                 name="login"
//                 placeholder="Логин *"
//                 className={style.input}
//                 onChange={handleChange}
//                 value={values.login || ""}
//                 required
//               />

//               {errors.login && <p className={style.error}>{errors.login}</p>}

//               <input
//                 autoComplete="nope"
//                 type="password"
//                 name="password"
//                 placeholder="Пароль *"
//                 className={style.input}
//                 onChange={handleChange}
//                 value={values.password || ""}
//                 required
//               />

//               {errors.password && (
//                 <p className={style.error}>{errors.password}</p>
//               )}
//             </div>

//             <div className={style.butModule}>
//               <NavLink className={style.noActiveButton} exact to="/login">
//                 <span>Вход</span>
//               </NavLink>

//               <button type="submit" className={style.activeButton}>
//                 Регистрация
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   onRegister: (values) => dispatch(authOperations.registerUser(values)),
// });

// export default connect(null, mapDispatchToProps)(Register);

// export default compose(
//   withAuthRedirect,
//   connect(null, mapDispatchToProps)
// )(RegisterPage);

class RegisterPage extends Component {
  state = {
    name: "",
    login: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
  };

  render() {
    const { name, login, password } = this.state;
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
            <div className={style.registerTitle}>регистрация</div>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className={style.inputModule}>
                <input
                  type="text"
                  name="name"
                  placeholder="Имя *"
                  className={style.input}
                  onChange={this.handleChange}
                  value={name}
                  required
                />

                <input
                  type="text"
                  name="login"
                  placeholder="Логин *"
                  className={style.input}
                  onChange={this.handleChange}
                  value={login}
                  required
                />

                <input
                  autoComplete="nope"
                  type="password"
                  name="password"
                  placeholder="Пароль *"
                  className={style.input}
                  onChange={this.handleChange}
                  value={password}
                  required
                />
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRegister: (credentials) =>
    dispatch(authOperations.registerUser(credentials)),
});

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps)
)(RegisterPage);
