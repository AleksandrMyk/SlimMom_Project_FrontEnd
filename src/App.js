import React, { lazy, Suspense, useContext } from "react";
import Spiner from "./Components/Spiner";
import ProtectedComponent from "./Components/CustomRoutes/ProtectedRoute";
import { Switch, BrowserRouter } from "react-router-dom";
import {__RouterContext} from "react-router";
import { useTransition, animated } from "react-spring";
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
const AddProductForm = lazy(() =>
  import(
    "./Components/AddProductForm/AddProductForm" /* webpackChunkName: "Home-page" */
  )
);

const Home = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      transform: 'translate(100%,0)'
    },
    enter: { opacity: 1, transform: 'translate(0%,0)' },
    leave: { opacity: 0, transform: 'translate(-50%,0)' }
  });

  return (
    <>
    <Suspense fallback={<Spiner />}>
    {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>      
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
      <ProtectedComponent
        active={true}
        path="/diary"
        component={AddProductForm}
      />
    </Switch>
    </animated.div>
   ))}
    </Suspense>
    </>
  );
    };
  
function App() {
      return (
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    }

export default App;
