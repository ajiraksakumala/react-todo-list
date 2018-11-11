import React, { Component } from 'react';
import { Col, Row, Input, Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

export default class Todo extends Component {
    state = {
        todos: [],
        input: '',
        index: 0,
        id: null,
        button: false
    };

    handleChange = (e) => {
        this.setState ({
            input: e.target.value
        });
    };

    addData = () => {
        const todos = this.state.todos;
        if (this.state.input === ''){
            alert('Tidak Boleh Kosong');
        } else {
            if (this.state.id === null) {
                const todo = this.state.input;
                todos.push(todo);
                localStorage.setItem("todos", JSON.stringify(todos));
                this.setState ({
                    input : ''
                });
            } else {
                todos.splice(this.state.id, 1, this.state.input)
                localStorage.setItem("todos", JSON.stringify(todos));
                this.setState ({
                    input : '',
                    id : null,
                    button : false
                });
            }
        }
    };

    delData = (index) => {
        const todos = this.state.todos;
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        this.componentDidMount();
    }

    getEdit = (index) => {
        const todos = this.state.todos;
        const data = todos[index];
        this.setState ({
            input : data,
            button : true,
            id : index
        });
    }

    cancel = () => {
        this.setState ({
            id : null,
            input : '',
            button : false
        });
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("todos"));
        if(data != null) {
            this.setState ({
                todos : data
            });
        }
    }

    render() {
        return (
            <Container>
                <Row className="header">
                    <Col xs={12} md={2}>
                        <span className="text-right">Do It Later</span>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col xs={12} md={6}>
                                <Input type="text" id="textInput" onChange={this.handleChange} value={this.state.input}/>
                            </Col>
                            <Col xs={12} md={6}>
                                {this.state.button ? (
                                    <div>
                                        <Button outline className="btnEdit" onClick={ () => this.addData() }> Edit </Button> <Button outline className="btnEdit" onClick={ () => this.cancel() }> Batal </Button>
                                    </div>
                                ) : (
                                    <Button outline className="btnAdd" onClick={() => this.addData()}> Kirim </Button>
                                )
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="listData">
                    <Col className="list-col col">
                    <ListGroup>
                        {this.state.todos.map((todo, index) => {
                            return <ListGroupItem className="gridList"> 
                            <Row>
                                <Col xs={12} md={6}> {todo} </Col>
                                <Col className="gridBtn" xs={12} md={6}> <Button className="btnList" outline onClick={ () => this.delData(index) }> Hapus </Button> <Button className="btnList" outline onClick={ () => this.getEdit(index) }> Edit </Button> </Col>
                            </Row>
                            </ListGroupItem>
                        })}
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}