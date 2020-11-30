import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../Redux/auth";

import PropTypes from "prop-types";
import s from "./UserInfo.module.css";

const UserInfo = ({ userName, onLogout }) => {
  return (
    <div className={s.container}>
      <span className={s.name}>{userName || "Пользователь"}</span>
      <button className={s.exit} type="submit" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserInfo
);

UserInfo.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func,
};
