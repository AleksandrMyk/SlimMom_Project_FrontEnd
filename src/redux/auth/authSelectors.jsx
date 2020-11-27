const isAuthenticated = (state) => state.auth.token;

const getUserName = () => {
  "Name";
};
// const getUserName = (state) => state.auth.user.name;

export default { isAuthenticated, getUserName };
