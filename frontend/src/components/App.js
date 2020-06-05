import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoContainer from './TodoContainer';
import Login from './Login';

function App() {
  return (
    <Router>
      <Route exact path="/" component={TodoContainer} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
