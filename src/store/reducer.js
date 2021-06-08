import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
    value: '123',
    data: ['你好1','nihao1','halo1','hello1','ohayo1']
}

// reducer 可以接收state，但是绝不能修改state
const fn = (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.value = action.value
        return newState
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.data.push(newState.value === ''? 'todo info2': newState.value)
        newState.value = ''
        return newState
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.data.splice(action.index, 1)
        return newState
    }
    return state;
}
export default fn