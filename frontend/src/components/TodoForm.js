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
        axios.get('http://localhost/api/account/', {
            headers: {
                'Authorization': state.user.token,
            }})
            .then(data => {
                setId(data.data.id)
            })
    })

    const submitPost = (e) => {
        e.preventDefault()

        const data = {
            author: 1,
            title: title,
            content: content
        }
        axios.post('http://localhost/api/todos/', data, {
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
        const result = window.confirm('全ての予定を削除しますか？')
        if (result) {
            const todos = state.todos
            todos.map(todo => {
                axios.delete(`http://localhost/api/todos/${todo.id}/`, {
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
                    <label htmlFor="formTodoTitle">タイトル</label>
                    <input
                      className="form-control"
                      id="formTodoTitle"
                      onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formTodoBody">内容</label>
                    <textarea
                      className="form-control"
                      id="formTodoBody"
                      onChange={e => setContent(e.target.value)}
                    />
                </div>
                <Button
                  className="btn btn-primary"
                  onClick={submitPost}
                  disabled={unPost}>予定を追加する</Button>
                <Button
                  className="btn btn-danger m-4"
                  onClick={submitAllDelete}
                  disabled={state.todos.length === 0}
                >全ての予定を削除する</Button>
            </form>
        </Col>
    )
}

export default TodoForm
