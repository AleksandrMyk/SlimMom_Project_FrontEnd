import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LogoDashboard from "../../Components/LogoDashboard";
import BurgerMenu from "../../Components/BurgerMenu";
import UserNav from "../../Components/UserNav";
import UserInfo from "../../Components/UserInfo";
import axios from "axios";
import style from "./dashboard.module.css";

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
      <nav>
        <div className={style.headerContainer}>
          <div className={style.headerContainer}>
            <LogoDashboard />
          </div>

          <div className={style.burgerContainer}>
            <BurgerMenu />
          </div>

          {/* <UserNav />
          <UserInfo userName={userName} onLogout={logout}></UserInfo> */}
        </div>
        <div className={style.greyZone}>
          <UserInfo userName={userName} onLogout={logout}></UserInfo>
        </div>
      </nav>
    </>
  );
};

export default Dashboard;
