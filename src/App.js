import React, { lazy, Suspense } from "react";
import Spiner from "./Components/Spiner";
import ProtectedComponent from "./Components/CustomRoutes/ProtectedRoute";
import { Switch } from "react-router-dom";

import "./app.css";

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
<<<<<<< HEAD
=======
const AddProductForm = lazy(() =>
  import(
    "./Components/AddProductForm/AddProductForm" /* webpackChunkName: "Home-page" */
  )
);
>>>>>>> 7f252da012fa2b4e8be5bb5c206e94901d75986f

const App = () => (
  <Suspense fallback={<Spiner />}>
    <Switch>
      <ProtectedComponent active={false} path="/login" component={Login} />
      <ProtectedComponent
        active={false}
        path="/register"
        component={Register}
      />
      <ProtectedComponent
        active={false}
        exact
        path="/"
        component={DailyCaloriesForm}
      />
      <ProtectedComponent
        active={true}
        path="/dashboard"
        component={Dashboard}
      />
<<<<<<< HEAD

      {/* <Route path="*">
        <NotFound />
      </Route> */}
=======
      <ProtectedComponent
        active={true}
        path="/diary"
        component={AddProductForm}
      />
>>>>>>> 7f252da012fa2b4e8be5bb5c206e94901d75986f
    </Switch>
  </Suspense>
);

export default App;
