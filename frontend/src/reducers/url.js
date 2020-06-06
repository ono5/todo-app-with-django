import {
    SET_USER
} from '../actions'

const url = (state="", action) =>{
    switch(action.type) {
        case SET_USER:
            return window.location.href
        default:
            return window.location.href
    }
}
export default url
