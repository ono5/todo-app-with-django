import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Row,
} from 'react-bootstrap';

function App() {
  return (
    <div className="App container-flud">
      <header className="App-header">
        <Row className="App-row">
          <Todo />
          <TodoList />
        </Row>
      </header>
    </div>
  );
}

export default App;
