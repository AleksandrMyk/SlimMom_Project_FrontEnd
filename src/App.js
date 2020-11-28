import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Spiner from "./Components/Spiner";
import DailyCaloriesForm from "./Views/DailyCaloriesForm";
import Register from "./Views/Register";
import Login from "./Views/Login";
import "./app.css";
import product from "./Components/DiaryProductLIstItem/products.json"
import DairyProductsListItem from "./Components/DiaryProductLIstItem/DiaryProductLIstItem";

const App = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Suspense fallback={<Spiner />}></Suspense>
      <Switch>
        <Route exact path="/" component={DailyCaloriesForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    { product.map((product) => (
 
 <DairyProductsListItem
 key={product._id.$oid}
 title={product.title.ua}
 weight={product.weight}
 calories={product.calories}
 />
     
))}

    </>
  );
};

export default App;
