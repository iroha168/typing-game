import * as actionTypes from './actionTypes';

export const initStr= (strList) => {
    return { 
        type: actionTypes.INIT_STR,
        strList: strList
    }
}

export const correctType = () => {
    return { type: actionTypes.CORRECT_TYPE}
}

export const wrongType = () => {
    return { type: actionTypes.WRONG_TYPE}
}

export const displayNext= () => {
    return { type: actionTypes.DISPLAY_NEXT}
}