import React, {
    useContext,
    useEffect,
    useState,
    useMemo,
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
    const [filterKey, setFilterKey] = useState('')
    const [todos, setTodos] = useState(state.todos)

    useEffect(() => {
        axios.get('http://localhost/api/todos/', {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
            }
        })
        .then(res => {
            const allTodo = res.data
            setTodos(allTodo)
            dispatch({
                type: ALL_TODO,
                todos: allTodo
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [state.user])

    const filteredTodo = useMemo(() => {
        return todos.filter(row => row.title.includes(filterKey) || row.content.includes(filterKey))
    }, [filterKey])

    const handleFilter = key => {
        setFilterKey(key)
    }

    return (
        <Col xl={9}>
            <div className="form-group">
                <input
                    className="form-control"
                    id="formTodoTitle"
                    placeholder="Search...."
                    onChange={e => handleFilter(e.target.value)}
                />
            </div>
            <table className="table table-sm Todo-list bg-dark text-white">
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
                   // 検索キーがセットされている場合は、フィルタしたTodoを表示
                   filterKey
                    ? filteredTodo.map((todo, index) => (<Todo key={index} todo={todo} />))
                    : state.todos.map((todo, index) => (<Todo key={index} todo={todo} />))
                 }
                </tbody>
            </table>
        </Col>
    )
}

export default TodoList
