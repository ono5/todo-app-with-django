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
import reducer from '../reducers'

const TodoList = () => {
    const { state, dispatch } = useContext(AppContext)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost/api/todos/', {
            headers: {
                'Authorization': state.user.token,
            }
        })
        .then(res => {setTodos(res.data)})
    }, [])

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
                    {
                        todos.map(todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td><input value={todo.title} /></td>
                                <td><input value={todo.content}/></td>
                                <td>
                                    <a>
                                      <i className="fas fa-pen-square fa-lg text-success"></i>
                                    </a>
                                </td>
                                <td>
                                    <a>
                                      <i className="far fa-trash-alt fa-lg delete text-danger"></i>
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </Col>
    )
}

export default TodoList
