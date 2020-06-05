import React, {
    useState,
    useEffect,
    useReducer,
} from 'react'
import axios from 'axios'
import {
    Col,
} from 'react-bootstrap';
import reducer from '../reducers'

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, {})
    const [todos, setTodos] = useState([])
    console.log({state})

    useEffect(() => {
        axios.get('http://localhost/api/todos/', {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
            }
        })
        .then(res => {setTodos(res.data)})
    }, [])

    return (
        <Col xl={9}>
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>{todo.title}</li>)
                }
            </ul>
        </Col>
    )
}

export default TodoList
