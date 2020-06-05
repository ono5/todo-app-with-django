import {
    SET_USER,
    DELETE_USER,
} from '../actions/'

const user = (state={}, action) =>{
    switch(action.type) {
        case SET_USER:
            return state
        case DELETE_USER:
            // 後で実装
            return {}
        default:
            return state
    }
}

export default user
