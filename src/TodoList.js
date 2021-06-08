import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";
import axios from "axios";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from "./store";
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import { getInputChangeAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        const storeState = store.getState()
        this.state = {
            inputValue: '',
            list: ['你好','nihao','halo','hello','ohayo'],
            show: true,
            data: storeState.data,
            value: storeState.value
        }
        this.bindMethods()
        store.subscribe(this.handleStoreChange)
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
                <TodoListUI 
                    value={this.state.value}
                    handleInputChange1={this.handleInputChange1}
                    handleButtonClick1={this.handleButtonClick1}
                    data={this.state.data}
                    handleItemDelete1={this.handleItemDelete1}
                />
            </Fragment>
        );
    }
    bindMethods(){
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleButtonClick1 = this.handleButtonClick1.bind(this)
        this.handleInputChange1 = this.handleInputChange1.bind(this)
        this.handleItemDelete1= this.handleItemDelete1.bind(this)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleItemDelete1(index){
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action)
    }
    handleButtonClick1(){
        const action = {
            type: ADD_TODO_ITEM
        }
        store.dispatch(action)
    }
    handleInputChange1({target: { value }}){
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value
        // }
        const action = getInputChangeAction(value)
        store.dispatch(action)
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
                        key={index}
                    >
                        <TodoItem 
                            content={item}
                            index={index}
                            handleItemDelete={this.handleItemDelete}
                        />
                    </CSSTransition>
                    
                )
            })
        )
    }


    componentDidMount(){
        // axios.get('http://localhost.charlesproxy.com:3000/api/todolist').then((res) => {
        //     this.setState((prevState) => {
        //         const list = [...prevState.list, ...res.data]
        //         return {list}
        //     })
        // }).catch((err) => {
        //     console.error(err)
        // })

        const action = getTodoList()
        store.dispatch(action)
    }
}

export default TodoList;
