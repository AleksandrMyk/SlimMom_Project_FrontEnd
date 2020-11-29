import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
// import NavigationBar from "./Components/NavigationBar";
import AppBar from "./Components/AppBar";
=======
import NavigationBar from "./Components/NavigationBar";
// import AppBar from "./Components/AppBar";
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a
import Spiner from "./Components/Spiner";
// import DailyCaloriesForm from "./Views/DailyCaloriesForm";
import Register from "./Views/Register";
import Login from "./Views/Login";
import "./app.css";


const App = () => {
  return (
    <>

      <Suspense fallback={<Spiner />}></Suspense>
      <Switch>
        {/* <Route exact path="/" component={DailyCaloriesForm} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/diary" component={DiaryPage} />
      </Switch>
    </>
  );
};

export default App;
