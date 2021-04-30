import { combineReducers } from "redux";
import listHomeReducer from "./listHomeReducer";

const RootReducer = combineReducers({
    listHome: listHomeReducer,
});
export default RootReducer;
