import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div>
                <label htmlFor="insertArea2">input: </label>
                <Input 
                    placeholder="todo info2"
                    style={{width: '300px', margin: '10px'}}
                    id="insertArea2"
                    className="input"
                    value={props.value} 
                    onChange={props.handleInputChange1}
                />
                <Button 
                    onClick={props.handleButtonClick1}
                    type="primary"
                >
                    submit
                </Button>

            </div>  
            <List 
                style={{width: '450px'}}
                bordered
                dataSource={props.data}
                renderItem={(item, index) => (
                    <List.Item 
                        onClick={(index) => {props.handleItemDelete1(index)}}
                    >
                        {item}
                    </List.Item>
                )}
            />
        </Fragment>
    );
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <div>
//                     <label htmlFor="insertArea2">input: </label>
//                     <Input 
//                         placeholder="todo info2"
//                         style={{width: '300px', margin: '10px'}}
//                         id="insertArea2"
//                         className="input"
//                         value={this.props.value} 
//                         onChange={this.props.handleInputChange1}
//                     />
//                     <Button 
//                         onClick={this.props.handleButtonClick1}
//                         type="primary"
//                     >
//                         submit
//                     </Button>

//                 </div>  
//                 <List 
//                     style={{width: '450px'}}
//                     bordered
//                     dataSource={this.props.data}
//                     renderItem={(item, index) => (
//                         <List.Item 
//                             onClick={(index) => {this.props.handleItemDelete1(index)}}
//                         >
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </Fragment>
//         );
//     }
// }

export default TodoListUI