import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentPos: 0,
    str: "",
    lastPos: 0
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_STR: return {
            ...state,
            str: action.str,
            lastPos: action.str.length - 1
        }
        case actionTypes.CORRECT_TYPE: return {
            ...state,
            currentPos: state.currentPos + 1
        }
        case actionTypes.WRONG_TYPE: return state;
        default: return state;
    }
}

export default reducer;