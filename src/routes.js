import { lazy } from "react";

export default [
  {
    name: "Logo",
    path: "/diary",
    exact: true,
    component: lazy(() =>
      import(
        "./Components/DiaryPage/DiaryPage.js" /* webpackChunkName: "diary-page" */
      )
    ),
    private: false,
    restricted: false,
  },
];
