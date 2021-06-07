import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    handleItemDelete: PropTypes.func,
    index: PropTypes.number.isRequired
}

TodoItem.defaultProps = {
    content: 'defaultValue'
}

export default TodoItem