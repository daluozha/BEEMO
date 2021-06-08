import { CHANGE_INPUT_VALUE, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://localhost.charlesproxy.com:3000/api/todolist').then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
        }).catch((err) => {
            console.error(err)
        })
    }
}