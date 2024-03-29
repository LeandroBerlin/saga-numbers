//import the actions we defined
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions/actionTypes'

// define an initial state
const initialState = {
    fetching: false,
    message: null,
    error: null
};

// the reducer
export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null, number: action.number };
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, message: action.message };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, message: null, error: action.error };
        default:
            return state;
    }
}