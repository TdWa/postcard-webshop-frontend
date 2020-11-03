import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import productsReducer from "./products/reducer";
// import postPageSliceReducer from "./postPage/reducer";

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  // postPage: postPageSliceReducer,
});

export default reducer;
