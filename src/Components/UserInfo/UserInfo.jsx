import React from "react";

import PropTypes from "prop-types";
import s from "./UserInfo.module.css";

const UserInfo = ({ userName, onLogout }) => {
  return (
    <div className={s.container}>
      <div className={s.name}>
        <span> {userName || "Пользователь"}</span>
      </div>
      <div className={s.logoutButton} type="submit" onClick={onLogout}>
        Выйти
      </div>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func,
};
