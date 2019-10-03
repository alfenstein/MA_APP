//Mineral Application actions
import { ADD_MINERAL, TOGGLE_MINERAL, SET_FILTER } from "./actiontypes";

let nextMineralId = 0;
//let id = 0;

export const addMineral = content => ({
    type: ADD_MINERAL,
    payload: {
        id: ++nextMineralId,
        content
    }
});

export const toggleMineral = id => ({
    type: TOGGLE_MINERAL,
    payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter }});
