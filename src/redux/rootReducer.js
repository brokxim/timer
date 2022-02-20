import { combineReducers } from "redux";
import timerReducer from "./reducers/timerReducer";
import taskReducer from "./reducers/taskReducer";

export default combineReducers({
    time:timerReducer,
    task:taskReducer
})