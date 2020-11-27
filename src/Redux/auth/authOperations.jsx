import axios from "axios";
import authActions from "./authActions";

// axios.defaults.baseURL = "https://slimmom.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const logOut = () => (dispatch, getState) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      // token.unset();
      dispatch(authActions.logoutSuccess());
      console.log("logout success");
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

export default { logOut };
