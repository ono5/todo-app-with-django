import React from 'react'

import {
    Button,
    Row,
} from 'react-bootstrap';

const Login = () => {
    return (
        <div className="App container-flud">
            <header className="App-header">
                <Row className="login-row">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formTodoTitle">UserName</label>
                            <input className="form-control" id="formTodoTitle" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formTodoBody">Password</label>
                            <input className="form-control" id="formTodoTitle" />
                        </div>
                        <Button className="btn btn-primary btn-block">Login</Button>
                    </form>
                </Row>
            </header>
        </div>
    )
}

export default Login
