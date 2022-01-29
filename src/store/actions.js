import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
//({}) to set an automatic return, or {return ...}


export const requestRobots = () => (dispatch) => { // without thunk: export const requestRobots = (dispatch) =>
    dispatch({ type: REQUEST_ROBOTS_PENDING });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: robots }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
}