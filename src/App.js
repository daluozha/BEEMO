import { list } from "postcss";
import React, { Component, Fragment } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
            // eslint-disable-next-line 
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        // this.handleItemDelete = this.handleItemDelete.bind(this)

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
                    <input 
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>submit</button>
                </div>                
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li 
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}
                                >
                                    {index} - {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
