import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import axios from 'axios'
import {
    Button,
    Col,
} from 'react-bootstrap';
import AppContext from '../contexts/AppContext';
import { DELETE_ALL_TODOS } from '../actions';

const TodoForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [id, setId] = useState(0)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        // userIDを取得
        console.log(state.user)
        axios.get(`${state.url}api/account/`, {
            headers: {
                'Authorization': state.user.token,
            }})
            .then(data => {
                setId(data.data.id)
            })
    }, [state.user])

    const submitPost = (e) => {
        e.preventDefault()

        const data = {
            author: id,
            title: title,
            content: content
        }
        axios.post(`${state.url}api/todos/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': state.user.token
            }})
            .then(res => {
                window.location.href = '/'
            })
    }

    const submitAllDelete = (e) => {
        e.preventDefault()
        const result = window.confirm('Would you like to delete all todo?')
        if (result) {
            const todos = state.todos
            todos.map(todo => {
                axios.delete(`${state.url}api/todos/${todo.id}/`, {
                    headers: {
                        'Authorization': state.user.token,
                }})
            })
            dispatch({ type: DELETE_ALL_TODOS})
        }
    }

    // タイトルとコンテンツの入力チェック
    const unPost = title === '' || content === ''

    return (
        <Col xl={3}>
            <h3>To-Do App</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="formTodoTitle">Title:</label>
                    <input
                      className="form-control"
                      id="formTodoTitle"
                      maxLength="50"
                      onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formTodoBody">Content:</label>
                    <textarea
                      className="form-control"
                      id="formTodoBody"
                      maxLength="255"
                      onChange={e => setContent(e.target.value)}
                    />
                </div>
                <Button
                  className="btn btn-primary"
                  onClick={submitPost}
                  disabled={unPost}>Add Todo</Button>
                <Button
                  className="btn btn-danger m-4"
                  onClick={submitAllDelete}
                  disabled={state.todos.length === 0}
                >All Delete</Button>
            </form>
        </Col>
    )
}

export default TodoForm
