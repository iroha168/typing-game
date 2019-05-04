import * as actionTypes from './actionTypes';


export const correctType = () => {
    return { type: actionTypes.CORRECT_TYPE}
}

export const wrongType = () => {
    return { type: actionTypes.WRONG_TYPE}
}

export const initStr= (str) => {
    return { 
        type: actionTypes.INIT_STR,
        str: str
    }
}