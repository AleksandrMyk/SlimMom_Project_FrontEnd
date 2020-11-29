// const isAuthenticated = (state) => state.auth.token;
const isAuthenticated = (state) => "state.auth.token";

// const getUserName = (state) => state.auth.user.name;
const getUserName = (state) => "name";

export default { isAuthenticated, getUserName };
