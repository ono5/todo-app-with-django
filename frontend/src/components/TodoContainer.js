import React from 'react'
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
                <Row className="App-row">
                <Row>
                    <Navibar />
                </Row>
                  <TodoForm />
                  <TodoList />
                </Row>
            </header>
        </div>
    )
}

export default TodoContainer
