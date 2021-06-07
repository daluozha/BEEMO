import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";
import axios from "axios";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['你好','nihao','halo','hello','ohayo'],
            show: true
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleToggle = this.handleToggle.bind(this)

    }
    handleToggle(){
        this.setState({
            show: !this.state.show
        })
    }
    handleInputChange({target: { value: inputValue }}){
        this.setState(() => ({ inputValue }))
    }
    handleButtonClick(){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
    getTodoItem(){
        return (
            this.state.list.map((item, index) => {
                return (
                    <CSSTransition
                        timeout={1000}
                        classNames='fade'
                        unmountOnExit
                        onEntered={(el) => {el.style.color = 'blue'}}
                        appear={true}
                    >
                        <TodoItem 
                            content={item}
                            key={index}
                            index={index}
                            handleItemDelete={this.handleItemDelete}
                        />
                    </CSSTransition>
                    
                )
            })
        )
    }
    componentDidMount(){
        axios.get('http://localhost.charlesproxy.com:3000/api/todolist').then((res) => {
            this.setState((prevState) => {
                const list = [...prevState.list, ...res.data]
                return {list}
            })
        }).catch((err) => {
            console.error(err)
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">input: </label>
                    <Input 
                        placeholder="todo info"
                        style={{width: '300px', margin: '10px'}}
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                    />
                    <Button 
                        onClick={this.handleButtonClick}
                        type="primary"
                    >
                        submit
                    </Button>

                </div>                
                <ul>
                    <TransitionGroup>
                        { this.getTodoItem() }
                    </TransitionGroup>
                </ul>
                <List 
                    style={{width: '450px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
                <div>
                    <CSSTransition
                        in={this.state.show}
                        timeout={1000}
                        classNames='fade'
                        unmountOnExit
                        onEntered={(el) => {el.style.color = 'blue'}}
                        appear={true}
                    >
                        <div>hello</div>
                    </CSSTransition>
                    <button onClick={this.handleToggle}>toggle</button>
                </div>
            </Fragment>
        );
    }
}

export default TodoList;
