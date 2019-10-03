//visi filter

import { SET_FILTER } from "../actiontypes";
import { VISIBILITY_FILTERS } from "../../constants";

const intialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = intialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }

    }
};

export default visibilityFilter;