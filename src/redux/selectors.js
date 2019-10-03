//selectors
import { VISIBILITY_FILTERS } from "../constants";

export const getMineralsState = store => store.minerals;

export const getMineralList = store =>
    getMineralsState(store) ? getMineralsState(store).allIds : [];

export const getMineralById = (store, id) => 
    getMineralsState(store) ? { ...getMineralsState(store).byIds[id], id } : {};


export const getMinerals = store =>
    getMineralList(store).map(id => getMineralById(store, id));

export const getMineralsByVisibilityFilter = (store, visibilityFilter) => {
    const allMinerals = getMinerals(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allMinerals.filter(mineral => mineral.completed);
        
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allMinerals.filter(mineral => !mineral.completed);
        
        case VISIBILITY_FILTERS.ALL: 
        default:
            return allMinerals;
        
    }
};