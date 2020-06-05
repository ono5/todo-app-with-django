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
    const { state, dispatch } = useContext(AppContext)
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
                display()
                // user情報をセッションストレージに格納
                sessionStorage.setItem('username', username)
                sessionStorage.setItem('token', token)
            })
            .catch(err => {
                console.log(err)
                alert('ユーザー名かパスワードに誤りがあります！')
            })
    }

    return (
        <div className="App container-flud" id="Login-area">
            <header className="App-header">
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
                        >Login</Button>
                    </form>
                </Row>
            </header>
        </div>
    )
}

export default Login
