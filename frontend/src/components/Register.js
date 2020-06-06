import React, {
    useState,
    useContext,
} from 'react'
import axios from 'axios'
import {
    Button,
    Row,
} from 'react-bootstrap';
import { SET_USER } from '../actions';
import AppContext from '../contexts/AppContext';
import display from '../utils.js/display';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitUserInfo = (e) => {
        e.preventDefault()

        const data = {
            username: username,
            password: password
        }
        axios.post('http://localhost/api/users/', data, {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
                alert('既に同名のユーザが登録されています！')
            })
    }

    return (
        <div className="App container-flud" id="Register-area">
            <header className="App-header Login-header">
                <h1 className="mb-4">Register User</h1>
                <Row className="login-row">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formTodoTitle">UserName</label>
                            <input
                              className="form-control"
                              id="formTodoTitle"
                              onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formTodoBody">Password</label>
                            <input
                              className="form-control"
                              id="formTodoTitle"
                              onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                          className="btn btn-primary btn-block"
                          onClick={submitUserInfo}
                        >Register</Button>
                    </form>
                </Row>
            </header>
        </div>
    )
}

export default Login
