import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Dashboard = () => {
  const [userName, setUserName] = useState();
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    history.push("/login");
    localStorage.clear();
  };

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get("https://slimmom.herokuapp.com/users/getuser", {
        headers,
      })
      .then((response) => {
        const responseJson = response.data.user.name;
        setUserName(responseJson);
        console.log(userName);
      })
      .catch((error) => {
        if (error) {
          console.log("its some errors ", error);
          history.push("/login");
        }
      });
  }, [history, userName, token]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"></li>
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
