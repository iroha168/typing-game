import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentPos: 0,
    strList: [],
    currentWord: 0,
    lastWord:0,
    str: "",
    lastPos: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_STR: return {
            ...state,
            currentPos: 0,
            strList: action.strList,
            currentWord: 0,
            str: action.strList[0],
            lastPos: action.strList[0].length,
            lastWord: action.strList.length - 1
        }
        case actionTypes.CORRECT_TYPE: return {
            ...state,
            currentPos: state.currentPos + 1
        }
        case actionTypes.WRONG_TYPE: return state;
        case actionTypes.DISPLAY_NEXT: return {
            ...state,
            currentPos: 0,
            currentWord: state.currentWord + 1,
            str: state.strList[state.currentWord + 1],
            lastPos: state.strList[state.currentWord + 1].length
        }
        default: return state;
    }
}

export default reducer;