import { combineReducers } from "redux";
import apiProductsReducer from "./apiProducts/reducer";
import authReducer from "./auth/reducer";
import productsReducer from "./products/reducer";
import usersReducer from "./users/reducer";

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  apiProducts: apiProductsReducer,
  users: usersReducer,
});

export default reducer;
