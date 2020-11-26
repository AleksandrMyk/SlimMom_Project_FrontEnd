
// import { Switch, Route } from "react-router-dom";
// import Spiner from "./Components/Spiner/Spiner";
import React, {Suspense}from "react";
import { Switch } from "react-router-dom";
import MainNavigation from "./Components/MainNavigation/MainNavigation"
import routes from "./routes"
import PublicRoute from "./Components/MainNavigation/CustomRoutes/PublicRoute"
import PrivateRoute from "./Components/MainNavigation/CustomRoutes/PrivateRote"
import Logo from "./Components/Logo";
//тут будут роуты и компоненты

const App = () => {
  return (
    <>
      <Logo></Logo>
      <div>
          <MainNavigation />
          {/* {this.props.isAuthenticated && <UserMenu />} */}
        </div>
        <Suspense fallback="Spiner must be">
          <Switch>
            <PublicRoute
              path={routes.home}
              restricted={false}
              exact
              component="Home" // Need add component for redirect
            />
            <PublicRoute
              path={routes.login}
              restricted={true}
              redirectTo={routes.register}
              component="Login" // Need add component for redirect
            />
            <PublicRoute
              path={routes.register}
              restricted={true}
              redirectTo={routes.login}
              component="RegisterForm" // Need add component for redirect
            />
             <PrivateRoute
              path={routes.diary}
              restricted={true}
              redirectTo={routes.login}
              component="Diary" // Need add component for redirect
            />
             <PrivateRoute
              path={routes.calculator}
              restricted={true}
              redirectTo={routes.login}
              component="Calculator" // Need add component for redirect
            />
          </Switch>
        </Suspense>
    </>
  );
};

export default App;
