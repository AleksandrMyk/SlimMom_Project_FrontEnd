import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LogoDashboard from "../../Components/LogoDashboard";
import BurgerMenu from "../../Components/BurgerMenu";
import UserNav from "../../Components/UserNav";
import UserInfo from "../../Components/UserInfo";
import axios from "axios";
import style from "./dashboard.module.css";
import SideBar from "../../Components/RightSideBar";
import AddProductForm from "../../Components/AddProductFormTESTcopy";
// import AddProductForm from "../../Components/AddProductForm";
import Spiner from "../../Components/Spiner";

const Calculator = lazy(() =>
  import("../../Components/Calculator" /* webpackChunkName: "Daily-calories" */)
);

// const Calendar = lazy(() =>
//   import(
//     "../../Components/Calendar/CalendarOnClick" /* webpackChunkName: "product-form" */
//   )
// );

const Dashboard = () => {
  const [userName, setuserName] = useState("");
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    history.push("/login");
    localStorage.clear();
  };

  const getCurrentUserData = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get("https://slimmom.herokuapp.com/users/getuser", {
        headers,
      })
      .then((response) => {
        console.log(response);
        setuserName(response.data.user.name);
        console.log(userName);
      })
      .catch((error) => {
        if (error) {
          console.log("its some errors ", error);
          history.push("/login");
        }
      });
  };

  useEffect(() => {
    getCurrentUserData();
  }, [userName, history]);

  return (
    <>
      <Suspense fallback={<Spiner />}>
        <div className={style.directionWrapper}>
          <div className={style.componentContainer}>
            <div className={style.headerContainerWrapper}>
              <div className={style.headerContainer}>
                <div className={style.logoContainer}>
                  <LogoDashboard />
                </div>
                <div className={style.userNavContainer}>
                  <UserNav />
                </div>
                <div className={style.nagigationWrapper}>
                  <div className={style.tabletZone}>
                    <UserInfo userName={userName} onLogout={logout} />
                  </div>
                  <div className={style.burgerContainer}>
                    <BurgerMenu />
                  </div>
                </div>
                {/* <UserNav />
          <UserInfo userName={userName} onLogout={logout}></UserInfo> */}
              </div>
            </div>
            <div className={style.greyZone}>
              <UserInfo userName={userName} onLogout={logout} />
            </div>
            <Switch>
              <Route exact path="/dashboard" component={Calculator} />
              <Route exact path="/dashboard/diary" component={AddProductForm} />
            </Switch>
          </div>

          <SideBar userName={userName} logout={logout}></SideBar>
        </div>
      </Suspense>
    </>
  );
};

export default Dashboard;
