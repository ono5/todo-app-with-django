import React, {useEffect, useReducer} from 'react'
import {
    Row
} from 'react-bootstrap';
import Todo from './Todo';
import TodoList from './TodoList';
import reducer from '../reducers'
import { SET_USER } from '../actions';
import Navibar from './Navibar';

const TodoContainer = () => {
    const [state, dispatch] = useReducer(reducer, {})
    return (

        <div className="App container-flud" id="Todo-area">
            <header className="App-header">
                <Row>
                    <Navibar />
                </Row>
                <Row className="App-row">
                  <Todo />
                  <TodoList />
                </Row>
            </header>
        </div>
    )
}

export default TodoContainer
