import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

const initialStateSearch = {
    searchField: ''
}
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        // return { ...state, searchField: action.payload } // same thing
        default:
            return state;
    }
}


const initialStateRobots = {
    robots: [],
    isLoading: false,
    error: ''
}
export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            console.log('loading..');
            return Object.assign({}, state, { isLoading: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isLoading: false });
        case REQUEST_ROBOTS_FAILED:
            console.log('error..' + action.payload);
            return Object.assign({}, state, { error: action.payload, isLoading: false });
        default:
            return state;
    }
}