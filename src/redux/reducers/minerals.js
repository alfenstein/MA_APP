//minerals
import { ADD_MINERAL, TOGGLE_MINERAL } from "../actiontypes.js";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state= initialState, action){
    switch (action.type) {
        case ADD_MINERAL: {
            const { id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        
        case TOGGLE_MINERAL: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }

        default:
            return state;
    }
}