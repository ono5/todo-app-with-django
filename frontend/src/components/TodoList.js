import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    Col,
} from 'react-bootstrap';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost/api/todos/', {
            headers: {
                'Authorization': 'Token 221263af7466083e773347f9335c5c93e0dc31ff',
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
