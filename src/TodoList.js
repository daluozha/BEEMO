import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";
import axios from "axios";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['你好','nihao','halo','hello','ohayo']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)

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
                    <TodoItem 
                        content={item}
                        key={index}
                        index={index}
                        handleItemDelete={this.handleItemDelete}
                    />
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
                    <input 
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>submit</button>
                </div>                
                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
