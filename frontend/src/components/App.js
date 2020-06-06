import React, { useReducer, useEffect, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContainer from './TodoContainer';
import Login from './Login';
import reducer from '../reducers/'
import AppContext from '../contexts/AppContext'
import display from '../utils.js/display';
import { SET_USER, SET_URL } from '../actions';

function App() {
  const initialState = {
    todos: [],
    user: {},
    url: "",
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const username = sessionStorage.getItem('username')
    const token = sessionStorage.getItem('token')
    // セッションにユーザー情報が存在する場合は、ログイン済みとする
    if (username && token) {
       display('Login-area', 'Todo-area')
       dispatch({
        type: SET_USER,
        username,
        token
      })
      dispatch({
        type: SET_URL,
      })
    }

  }, [])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <TodoContainer />
      <Login />
    </AppContext.Provider>
  );
}

export default App;
