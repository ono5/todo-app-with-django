import {
    ALL_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODOS,
} from '../actions'

const todos = (state=[], action) =>{
    switch(action.type) {
        case ALL_TODO:
            return action.todos
        case UPDATE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case DELETE_TODO:
            return state.filter(todo => todo.id ? action.todo : todo)
        case DELETE_ALL_TODOS:
            return []
        default:
            return state
    }
}
export default todos
