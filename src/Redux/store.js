import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root";
import { persistStore } from "redux-persist";

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
export default store;

/**** Миш посмотри на такой вариант Стора*/
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import productReducer from "./product/productReducer";
// import authReducer from "./auth/authReducers";

// const defaultMiddleware = getDefaultMiddleware();

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// export const store = configureStore({
//   reducer: {
//     products: productReducer,
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);
