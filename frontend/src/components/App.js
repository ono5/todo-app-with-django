import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoContainer from './TodoContainer';

function App() {
  return (
    <Router>
      <Route exact path="/" component={TodoContainer} />
    </Router>
  );
}

export default App;
