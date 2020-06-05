import React, {useEffect, useReducer} from 'react'
import {
    Row
} from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Navibar from './Navibar';

const TodoContainer = () => {
    return (

        <div className="App container-flud" id="Todo-area">
            <header className="App-header">
                <Row>
                    <Navibar />
                </Row>
                <Row className="App-row">
                  <TodoForm />
                  <TodoList />
                </Row>
            </header>
        </div>
    )
}

export default TodoContainer
