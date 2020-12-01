import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
  }, [userName]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </span>
            </li>
          </ul>
          <span className="navbar-text">Welcome! {userName} </span>
        </div>
      </nav>
    </>
  );
};

export default Dashboard;
