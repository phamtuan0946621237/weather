import {SUB,ADD,BEFORE,AFTER} from './constans'
export const add = { 
    type: ADD,
    value: 1
}
export function Sub(param) {
    return {
        type: SUB,
        param
    }
}
export function _before(param) {
    return {
        type: BEFORE,
        param 
    }
}
export function _after(param) {
    return {
        type: AFTER,
        param
    }
}