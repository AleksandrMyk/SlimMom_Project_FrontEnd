import React, { lazy, Suspense } from "react";
import Spiner from "./Components/Spiner";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./app.css";

// import Login from "./Views/Login";
// import Register from "./Views/Register";
// import Dashboard from "./Views/Dashboard";
// import DailyCaloriesForm from "./Views/DailyCaloriesForm";

const Login = lazy(() =>
  import("./Views/Login/index" /* webpackChunkName: "Login-page" */)
);

const Register = lazy(() =>
  import("./Views/Register/index" /* webpackChunkName: "moviesSearch-page" */)
);

const Dashboard = lazy(() =>
  import("./Views/Dashboard/index" /* webpackChunkName: "moviesDetails-page" */)
);

const DailyCaloriesForm = lazy(() =>
  import(
    "./Views/DailyCaloriesForm/index" /* webpackChunkName: "moviesDetails-page" */
  )
);

const authGuard = (Component) => () => {
  return localStorage.getItem("token") ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};
const App = (props) => (
  <Router {...props}>
    <Suspense fallback={<Spiner />}>
      <Switch>
        <Route exact path="/" component={DailyCaloriesForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" render={authGuard(Dashboard)} />
        {/* <Route path="*">
        <NotFound />
      </Route> */}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
