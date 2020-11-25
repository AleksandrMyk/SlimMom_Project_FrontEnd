import React from "react";
// import { connect } from "react-redux";
// import { authSelectors, authOperations } from "../../redux/auth";
// import Button from "../Button/Button";

// import PropTypes from "prop-types";
import s from "./UserMenu.module.css";

// const UserMenu = ({ name, onLogout }) => (
const UserMenu = ({ name, onLogout }) => (
  <div className={s.container}>
    <span className={s.name}>Aztek</span>
    <button className={s.exit} type="submit" onClick={onLogout}>
      {" "}
      Выйти
    </button>
  </div>
);

// const mapStateToProps = (state) => ({
//   name: authSelectors.getUserName(state),
//   avatar:
//     "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg",
// });

export default UserMenu;
// export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
//   UserMenu
// );

// UserMenu.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   onLogout: PropTypes.func,
// };
