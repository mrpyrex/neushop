import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: [],
// };

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
