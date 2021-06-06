import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const { handleItemDelete, index } = this.props
        handleItemDelete(index)
    }
    render() {
        const { content } = this.props
        return (
            <li 
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{__html: content}}
            >
            </li>
        )
    }
}

export default TodoItem