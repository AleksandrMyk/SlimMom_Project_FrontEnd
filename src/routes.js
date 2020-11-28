// import { lazy } from "react";

export default {
  home: "/",
  login: "/login",
  register: "/register",
  calculator: "/calculator",
  dairy: "/dairy",
};

// export default [
//   {
//     name: "Logo",
//     path: "/diary",
//     exact: true,
//     component: lazy(() =>
//       import(
//         "./Components/DiaryPage/DiaryPage.js" /* webpackChunkName: "diary-page" */
//       )
//     ),
//     private: false,
//     restricted: false,
//   },
// ];

// ПРЕДЛОЖЕНИЕ ЗАМЕНИТЬ НА ТАКОЙ

// export default [
//   {
//     path: "/",
//     label: "Home",
//     exact: true,
//     component: lazy(() => import("./pages/HomePage")),
//     private: false,
//     restricted: false,
//   },
//   {
//     path: "/register",
//     label: "Register",
//     exact: true,
//     component: lazy(() => import("./pages/RegisterPage")),
//     private: false,
//     restricted: true,
//   },
//   {
//     path: "/login",
//     label: "Login",
//     exact: true,
//     component: lazy(() => import("./pages/LoginPage")),
//     private: false,
//     restricted: true,
//   },
//   {
//     path: "/calculator",
//     label: "Calculator",
//     exact: true,
//     component: lazy(() => import("./pages/CalculatorPage")),
//     private: true,
//     restricted: false,
//   },
//   {
//     path: "/dairy",
//     label: "Dairy",
//     exact: true,
//     component: lazy(() => import("./pages/DairyPage")),
//     private: true,
//     restricted: false,
//   },
// ];
