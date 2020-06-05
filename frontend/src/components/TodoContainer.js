import React, {useEffect, useReducer} from 'react'
import {
    Row,
} from 'react-bootstrap';
import Todo from './Todo';
import TodoList from './TodoList';
import reducer from '../reducers'

const TodoContainer = () => {
    const [state, dispatch] = useReducer(reducer, {})
    console.log({state})
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
