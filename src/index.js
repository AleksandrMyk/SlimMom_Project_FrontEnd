import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { DateProvider } from "./dateContext";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <DateProvider>
        <App />
      </DateProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
