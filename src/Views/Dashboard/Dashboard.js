import React, { useEffect, useState, useContext, lazy } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LogoDashboard from "../../Components/LogoDashboard";
import BurgerMenu from "../../Components/BurgerMenu";
import UserNav from "../../Components/UserNav";
import UserInfo from "../../Components/UserInfo";
import axios from "axios";
import style from "./dashboard.module.css";
import SideBar from "../../Components/RightSideBar";
import AddProductForm from "../../Components/AddProductForm";
import { DateContext } from "../../dateContext";
const Calculator = lazy(() =>
  import("../../Components/Calculator" /* webpackChunkName: "Daily-calories" */)
);

const Dashboard = () => {
  const [userName, setuserName] = useState("");
  const history = useHistory();
  const token = localStorage.getItem("token");
  const data = useContext(DateContext);

  const logout = () => {
    history.push("/login");
    localStorage.removeItem("token");
  };

  const getCurrentdayProductList = (day) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get(`https://slimmom.herokuapp.com/days/${day}`, {
        headers,
      })
      .then((response) => {
        const dayCalories = response.data.reduce(
          (acc, el) => acc + el.totalCalories,
          0
        );
        data.setconsumed(dayCalories);
      })
      .catch((error) => {
        if (error) {
          data.setconsumed(0);
          console.log("its some errors ", error);
        }
      });
  };

  const convertedDate = (date) => {
    if (date.getDate() < 10) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
        getCurrentdayProductList(convertedDate(data.date));
        setuserName(response.data.user.name);
        data.setdailyNorm(response.data.user.dayNormCalories);
        data.setprohibited(response.data.user.notAllowedCategories);
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          history.push("/login");
          localStorage.removeItem("token");
        }
      });
  };

  const dateHeder = (date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  useEffect(() => {
    getCurrentUserData();
  }, [userName, history]);

  return (
    <>
      <div className={style.directionWrapper}>
        <div className={style.componentContainer}>
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
          <div className={style.greyZone}>
            <UserInfo userName={userName} onLogout={logout} />
          </div>
          <Switch>
            <Route exact path="/dashboard" component={Calculator} />
            <Route exact path="/dashboard/diary" component={AddProductForm} />
          </Switch>
        </div>

        <SideBar
          userName={userName}
          currentDate={dateHeder(data.date)}
          logout={logout}
          consumed={data.consumed}
          norm={data.dailyNorm}
          notAllow={data.prohibited}
        ></SideBar>
      </div>
    </>
  );
};

export default Dashboard;
