import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import AppContext from '../contexts/AppContext';
import axios from 'axios'
import {
    DELETE_TODO,
    UPDATE_TODO
} from '../actions';

const Todo = ({todo}) => {
    const { state, dispatch } = useContext(AppContext)
    const {id, author, title, content } = todo
    const [updateTitle, setUpdateTitle] = useState("")
    const [updateContent, setUpdateContent] = useState("")

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

    const submitUpdate = (e) => {
        e.preventDefault()
        const data = {
            author: author,
            title: updateTitle ? updateTitle : title,
            content: updateContent ? updateContent : content
        }
        console.log(data)
        const result = window.confirm(`予定(ID=${id})を更新しますか？`)
        if (result) {
            axios.put(`http://localhost/api/todos/${id}/`, data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': state.user.token
            }})
            .then(res => {
                dispatch({
                    type: UPDATE_TODO,
                    todo: data
                })
            })
        }
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>
                <input
                  defaultValue={title}
                  onChange={e => setUpdateTitle(e.target.value)}
                />
            </td>
            <td>
                <input
                  defaultValue={content}
                  onChange={e => setUpdateContent(e.target.value)}
                />
            </td>
            <td>
                <a onClick={submitUpdate}>
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
