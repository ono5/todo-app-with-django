import React, {
    useContext,
    useState,
} from 'react'
import axios from 'axios'
import {
    Button,
    Row,
} from 'react-bootstrap';
import display from '../utils.js/display';
import AppContext from '../contexts/AppContext'

const Login = () => {
    const { state, dispatch } = useContext(AppContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitUserInfo = (e) => {
        e.preventDefault()

        const data = {
            username: username,
            password: password
        }
        axios.post(`${state.url}api/users/`, data, {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
                alert('You have already registered the same username!')
            })
    }
    // タイトルとコンテンツの入力チェック
    const unPost = username === '' || password === ''

    const handlerDisplay = (e) => {
        e.preventDefault()
        display('Register-area', 'Login-area')
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
                          disabled={unPost}
                        >Register</Button>
                        <div
                          className="btn btn-outline-warning btn-block mt-5"
                          onClick={handlerDisplay}
                        >To Login</div>
                    </form>
                </Row>
            </header>
        </div>
    )
}

export default Login
