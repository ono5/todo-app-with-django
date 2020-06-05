import React from 'react'
import {
    Row,
} from 'react-bootstrap';
import Todo from './Todo';
import TodoList from './TodoList';

const TodoContainer = () => {
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
