import React, { useReducer, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoContainer from './TodoContainer';
import Login from './Login';
import reducer from '../reducers/'
import AppContext from '../contexts/AppContext'

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  console.log({state})
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <Router>
        <Route exact path="/" component={TodoContainer} />
        <Route path="/login" component={Login} />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
