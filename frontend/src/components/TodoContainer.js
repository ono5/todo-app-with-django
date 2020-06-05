import React, {useEffect, useReducer} from 'react'
import {
    Row,
} from 'react-bootstrap';
import Todo from './Todo';
import TodoList from './TodoList';
import reducer from '../reducers'
import { SET_USER } from '../actions';

const TodoContainer = () => {
    const [state, dispatch] = useReducer(reducer, {})
    useEffect(() => {
        if (!sessionStorage.getItem('username')) {
            window.location.href = '/login'
        }
    }, [])

    return (

        <div className="App container-flud">
            <header className="App-header">
                <Row className="App-row">
                <Todo />
                <TodoList />
                </Row>
            </header>
        </div>
    )
}

export default TodoContainer
