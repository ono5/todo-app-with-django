import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import AppContext from '../contexts/AppContext';
import axios from 'axios'
import { DELETE_TODO } from '../actions';

const Todo = ({todo}) => {
    const { state, dispatch } = useContext(AppContext)
    const {id, title, content } = todo
    const submitDelete = (e) => {
        e.preventDefault()
        const result = window.confirm(`予定(ID=${id})を削除しますか？`)
        if (result) {
            dispatch({ type: DELETE_TODO, id: id})
            axios.delete(`http://localhost/api/todos/${id}/`, {
                headers: {
                    'Authorization': state.user.token,
            }})
        }
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td><input value={title} /></td>
            <td><input value={content}/></td>
            <td>
                <a onClick={submitDelete}>
                    <i className="fas fa-pen-square fa-lg text-success"></i>
                </a>
            </td>
            <td>
                <a
                    onClick={submitDelete}
                    >
                    <i className="far fa-trash-alt fa-lg delete text-danger"></i>
                </a>
            </td>
        </tr>
    )
}

export default Todo
