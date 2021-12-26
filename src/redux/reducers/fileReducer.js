import * as actionTypes from "../actions/actionTypes"

const initialState = {
    isChromeActive: false,
    isTxtActive:false,
}


export const fileReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_CHROME:
            return {...state, isChromeActive: true}
        case actionTypes.CLOSE_CHROME:
            return {...state, isChromeActive: false}
        case actionTypes.OPEN_TXT:
            return {...state, isTxtActive: true}
        case actionTypes.CLOSE_TXT:
            return {...state, isTxtActive: false}
        default:
            return state;
    }
}