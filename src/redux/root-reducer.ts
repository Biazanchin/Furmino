import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import CheckoutReducer from "./forms/checkoutReducer";
import ContactReducer from "./forms/contactReducer";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  CheckoutReducer,
  ContactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
