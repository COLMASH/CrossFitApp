import selectUserReducer from "./selectUserReducer";
import selectAdminReducer from "./selectAdminReducer";
import selectCoachReducer from "./selectCoachReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  selectUserReducer,
  selectAdminReducer,
  selectCoachReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
