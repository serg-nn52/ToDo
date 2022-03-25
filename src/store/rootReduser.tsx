import { combineReducers } from "redux";
import { reducer as todo } from "./todo/reducers";
import filter from "./filter/reducers";

const rootReducer = combineReducers({
  todo,
  filter,
});

export default rootReducer;
