import todoReducer from "./todos/Reducer/reducer.js";
import filterReducer from "./filters/reducer/reducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;