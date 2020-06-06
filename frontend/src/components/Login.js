import React, {
    useState,
    useContext,
} from 'react'
import axios from 'axios'
import {
    Button,
    Row,
} from 'react-bootstrap'
import { SET_USER } from '../actions'
import AppContext from '../contexts/AppContext'
import display from '../utils.js/display'
import Register from './Register'

const Login = () => {
    const { dispatch } = useContext(AppContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitUserInfo = (e) => {
        e.preventDefault()

        const data = {
            username: username,
            password: password
        }
        axios.post('http://localhost/api/auth/', data, {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(res => {
                var token = 'Token ' + res.data.token
                dispatch({
                    type: SET_USER,
                    username,
                    token
                })
                // 画面表示切り替え
                display('Login-area', 'Todo-area')
                // user情報をセッションストレージに格納
                sessionStorage.setItem('username', username)
                sessionStorage.setItem('token', token)
            })
            .catch(err => {
                console.log(err)
                alert('Sorry, wrong username or password...')
            })
    }

    const handlerDisplay = (e) => {
        e.preventDefault()
        display('Login-area', 'Register-area')
    }

    // タイトルとコンテンツの入力チェック
    const unPost = username === '' || password === ''

    return (
        <>
        <div className="App container-flud" id="Login-area">
            <header className="App-header Login-header">
                <h1 className="mb-4">Login</h1>
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
                        >Login</Button>
                        <div
                          className="btn btn-outline-warning btn-block mt-5"
                          onClick={handlerDisplay}
                        >Register User</div>
                    </form>
                </Row>
            </header>
        </div>
       <Register />
       </>
    )
}

export default Login
