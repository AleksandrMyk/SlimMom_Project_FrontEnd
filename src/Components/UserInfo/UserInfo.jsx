import React from "react";

import PropTypes from "prop-types";
import s from "./UserInfo.module.css";

const UserInfo = ({ buttonNode, name, onLogout }) => (
  <div className={s.container}>
    <span className={s.name}>{name || "Aztek"}</span>
    <button className={s.exit} type="submit" onClick={onLogout}>
      {buttonNode || "Выйти"}
    </button>
  </div>
);

export default UserInfo;

UserInfo.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func,
};
