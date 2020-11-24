import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

//тут будут роуты и компоненты

const App = () => {
  return <Suspense fallback={"Loading.some addd.."}></Suspense>;
};

export default App;
