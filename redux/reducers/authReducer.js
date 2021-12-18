import * as actionTypes from "../actions/actionTypes"

const initialState = {
    isLoading: true,
    users: null,
    error: null
}


export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_REQUEST:
            return {...state, isLoading: true}
        case actionTypes.GET_USER_SUCCESS:
            console.log("gelen veri:", action.payload)
            return {...state, isLoading: false, users: action.payload, error: null}
        case actionTypes.GET_USER_FAILED:
            return {...state, isLoading: false, users: null, error: action.payload}
        default:
            return state;
    }
}