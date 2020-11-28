const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.name;
// const getUserName = () => {
// "Name";
// };

export default { isAuthenticated, getUserName };
