//store
//just needs initilization

import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);
