import { lazy } from "react";

export default [
  {
    path: "/",
    label: "HomePubblic",
    exact: true,
    component: lazy(() => import("./Views/DailyCaloriesForm")),
    private: false,
    restricted: false,
  },
  {
    path: "/",
    label: "HomePrivate",
    exact: true,
    component: lazy(() => import("./Views/DailyCaloriesForm")),
    private: true,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./Views/Register")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./Views/Login")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "TContacts",
    exact: true,
    component: lazy(() => import("./Pages/ContactPage/ContactPage")),
    private: true,
    restricted: false,
  },
];
