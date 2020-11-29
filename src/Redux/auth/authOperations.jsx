import axios from "axios";
import authActions from "./authActions";

<<<<<<< HEAD
// axios.defaults.baseURL = "https://slimmom.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };
=======
axios.defaults.baseURL = "https://slimmom.herokuapp.com/users";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/register", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error.message)));
};

const logIn = (credentials) => (dispatch, getState) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/login", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
      console.log("login success", getState().contacts);
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a

const logOut = () => (dispatch, getState) => {
  dispatch(authActions.logoutRequest());

  axios
<<<<<<< HEAD
    .post("/users/logout")
    .then(() => {
      // token.unset();
=======
    .post("/logout")
    .then(() => {
      token.unset();
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a
      dispatch(authActions.logoutSuccess());
      console.log("logout success");
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

<<<<<<< HEAD
export default { logOut };
=======
export default { register, logIn, logOut };
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a
