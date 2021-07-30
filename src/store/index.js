import selectUserReducer from "./selectUserReducer";
import selectAdminReducer from "./selectAdminReducer";
import selectCoachReducer from "./selectCoachReducer";
import selectWodReducer from "./selectWodReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  selectUserReducer,
  selectAdminReducer,
  selectCoachReducer,
  selectWodReducer,
});

const middlewares = applyMiddleware(thunk);
export const store = createStore(rootReducer, middlewares);

export default store;
