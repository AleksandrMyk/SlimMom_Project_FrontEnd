import React, { useEffect, useState, lazy } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LogoDashboard from "../../Components/LogoDashboard";
import BurgerMenu from "../../Components/BurgerMenu";
import UserNav from "../../Components/UserNav";
import UserInfo from "../../Components/UserInfo";
import axios from "axios";
import style from "./dashboard.module.css";
import SideBar from "../../Components/RightSideBar";
import AddProductForm from "../../Components/AddProductForm";

const Calculator = lazy(() =>
  import("../../Components/Calculator" /* webpackChunkName: "Daily-calories" */)
);

const date = new Date();

const Dashboard = () => {
  const [userName, setuserName] = useState("");
  const [dailyCalories, setDailyCalories] = useState(0);
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [calorieNorm, setcalorieNorm] = useState(0);
  const [prohibited, setprohibited] = useState([]);

  const logout = () => {
    history.push("/login");
    localStorage.removeItem("token");
  };

  const convertedDate = (date) => {
    if (date.getDate() < 10) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const dateHeder = (date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
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
        setDailyCalories(dayCalories);
      })
      .catch((error) => {
        if (error) {
          console.log("its some errors ", error);
        }
      });
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
        setprohibited(response.data.user.notAllowedCategories);
        setuserName(response.data.user.name);
        setcalorieNorm(response.data.user.dayNormCalories);
      })
      .catch((error) => {
        if (error) {
          console.log("its some errors ", error);
          history.push("/login");
          localStorage.removeItem("token");
        }
      });
  };

  useEffect(() => {
    //такого делать нельзя!!!! Это ужасно , но пока ничего лучшего я не придумал
    const interval = setInterval(() => {
      getCurrentUserData();
      getCurrentdayProductList(convertedDate(date));
    }, 1000);
    return () => clearInterval(interval);
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
            currentDate={dateHeder(date)}
            logout={logout}
            consumed={dailyCalories}
            norm={calorieNorm}
            notAllow={prohibited}
          ></SideBar>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
