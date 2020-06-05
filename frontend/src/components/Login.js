import React, {useState, useReducer} from 'react'
import axios from 'axios'
import {
    Button,
    Row,
} from 'react-bootstrap';

const Login = () => {
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
                sessionStorage.setItem('username', username)
                sessionStorage.setItem('token', token)
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
                alert('ユーザー名かパスワードに誤りがあります！')
            })
    }

    return (
        <div className="App container-flud">
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
