//reducers index entry point 

import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import minerals from "./minerals";

export default combineReducers({ minerals, visibilityFilter });
