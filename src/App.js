import React, { Suspense, Component } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";
import Spiner from "./Components/Spiner";
import PrivateRoute from "./CustomRoutes/PrivateRoute";
import PublicRoute from "./CustomRoutes/PublicRoute";
import authOperations from "./Redux/auth/auth-operations";
import { connect } from "react-redux";
// import AppBar from "./Components/AppBar";
// import DailyCaloriesForm from "./Views/DailyCaloriesForm";
// import Register from "./Views/Register";
// import Login from "./Views/Login";
// import NavigationBar from "./Components/Navigation";

import "./app.css";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Suspense fallback={<Spiner />}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              )
            )}
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
