import axios from "axios";
import authActions from "./authActions";

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

const logOut = () => (dispatch, getState) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
      console.log("logout success");
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

export default { register, logIn, logOut };
