import React, { lazy, Suspense } from "react";
import Spiner from "./Components/Spiner";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import routes from "./routes";

import "./app.css";
import {DiaryProductsList} from "./Components/DiaryProductsList/index"

const token = localStorage.getItem("token");

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
  return token ? <Component /> : <Redirect to={routes.login} />;
};

const App = (props) => (
  <>
  <Router {...props}>
    <Suspense fallback={<Spiner />}>
      <Switch>
        <Route exact path={routes.home} component={DailyCaloriesForm} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.register} component={Register} />
        <Route exact path={routes.dashboard} component={authGuard(Dashboard)} />
        {/* <Route path="*">
        <NotFound />
      </Route> */}
      </Switch>
    </Suspense>
  </Router>
  <DiaryProductsList/>
</>
);

export default App;
