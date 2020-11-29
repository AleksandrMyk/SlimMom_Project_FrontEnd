import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
// import AppBar from "./Components/AppBar";
import Spiner from "./Components/Spiner";
import DailyCaloriesForm from "./Views/DailyCaloriesForm";
import Register from "./Views/Register";
import Login from "./Views/Login";
import "./app.css";
import DiaryPage from "./pages/DiaryPage";

const App = () => {
  return (
    <>
      <NavigationBar />
      {/* <AppBar /> */}
      <Suspense fallback={<Spiner />}></Suspense>
      <Switch>
        <Route exact path="/" component={DailyCaloriesForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/diary" component={DiaryPage} />
      </Switch>
    </>
  );
};

export default App;
