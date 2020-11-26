import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Spiner from "./Components/Spiner";
import Register from "./Views/Register";
import Login from "./Views/Login";
import "./app.css";

const App = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Suspense fallback={<Spiner />}></Suspense>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>
    </>
  );
};

export default App;
