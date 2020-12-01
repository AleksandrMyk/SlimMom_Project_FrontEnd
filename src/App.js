import React, { lazy, Suspense } from "react";
import Spiner from "./Components/Spiner";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./app.css";

const token = localStorage.getItem("token");

// import Login from "./Views/Login";
// import Register from "./Views/Register";
// import Dashboard from "./Views/Dashboard";
// import DailyCaloriesForm from "./Views/DailyCaloriesForm";

const Login = lazy(() =>
  import("./Views/Login/index" /* webpackChunkName: "Login-page" */)
);

const Register = lazy(() =>
  import("./Views/Register/index" /* webpackChunkName: "Register-page" */)
);

const Dashboard = lazy(() =>
  import("./Views/Dashboard/index" /* webpackChunkName: "Dashboard-page" */)
);

const DailyCaloriesForm = lazy(() =>
  import("./Views/DailyCaloriesForm/index" /* webpackChunkName: "Home-page" */)
);

const authGuard = (Component) => () => {
  return token ? <Component /> : <Redirect to="/login" />;
};

const App = (props) => (
  <Router {...props}>
    <Suspense fallback={<Spiner />}>
      <Switch>
        <Route exact path="/" component={DailyCaloriesForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={authGuard(Dashboard)} />
        {/* <Route path="*">
        <NotFound />
      </Route> */}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
