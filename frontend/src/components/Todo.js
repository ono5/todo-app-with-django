import React from 'react'

import {
    Button,
    Col,
} from 'react-bootstrap';

const Todo = () => {
    return (
        <Col xl={3}>
            <h4>To-Do App</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formTodoTitle">タイトル</label>
                    <input className="form-control" id="formTodoTitle" />
                </div>
                <div className="form-group">
                    <label htmlFor="formTodoBody">内容</label>
                    <textarea className="form-control" id="formTodoBody" />
                </div>
                <Button className="btn btn-primary">予定を追加する</Button>
                <Button className="btn btn-danger">全ての予定を削除する</Button>
            </form>
        </Col>
    )
}

export default Todo
