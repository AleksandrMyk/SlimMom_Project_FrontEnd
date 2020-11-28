import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import NavigationBar from "./Components/NavigationBar";
import AppBar from "./Components/AppBar";
import Spiner from "./Components/Spiner";
import DailyCaloriesForm from "./Views/DailyCaloriesForm";
import Register from "./Views/Register";
import Login from "./Views/Login";
import "./app.css";

const App = () => {
  return (
    <>
      {/* <NavigationBar></NavigationBar> */}
      <AppBar />
      <Suspense fallback={<Spiner />}></Suspense>
      <Switch>
        <Route exact path="/" component={DailyCaloriesForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default App;
