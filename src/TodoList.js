import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['你好','nihao','halo','hello']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)

    }
    handleInputChange({target: { value: inputValue }}){
        this.setState({
            inputValue
        })
    }
    handleButtonClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index){
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
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
                    {
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
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
