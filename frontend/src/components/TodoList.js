import React, {
    useContext,
    useEffect,
    useState,
} from 'react'
import axios from 'axios'
import {
    Col,
} from 'react-bootstrap';
import AppContext from '../contexts/AppContext';
import Todo from './Todo';
import { ALL_TODO } from '../actions';

const TodoList = () => {
    const { state, dispatch } = useContext(AppContext)

    useEffect(() => {
        axios.get('http://localhost/api/todos/', {
            headers: {
                'Authorization': state.user.token,
            }
        })
        .then(res => {
            const allTodo = res.data
            dispatch({
                type: ALL_TODO,
                todos: allTodo
            })
        })
    }, [])
    console.log({state})

    return (
        <Col xl={9}>
            <h4></h4>
            <table className="table Todo-list bg-dark text-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>内容</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                 {state.todos.map((todo, index) => (<Todo key={index} todo={todo} />))}
                </tbody>
            </table>
        </Col>
    )
}

export default TodoList
