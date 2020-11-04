import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import productsReducer from "./products/reducer";
import usersReducer from "./users/reducer";

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  users: usersReducer,
});

export default reducer;
