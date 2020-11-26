import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes from "../routes";
import Section from "./Section";
import AppBar from "./AppBar/AppBar";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CalculatorPage from "../pages/CalculatorPage";
import DairyPage from "../pages/DairyPage";

import Spiner from "./Spiner";
//тут будут роуты и компоненты

const App = () => {
  return (
    <BrowserRouter>
      <Section>
        <AppBar />
      </Section>

      <Switch>
        <Section>
          <Spiner />
          <Section>
            <Route path={routes.home} component={HomePage} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.calculator} component={CalculatorPage} />
            <Route path={routes.dairy} component={DairyPage} />
          </Section>
        </Section>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
