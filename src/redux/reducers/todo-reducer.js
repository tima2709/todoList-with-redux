import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS} from "../types/types";

const initialState = {
    todo: []
}

export const todoReducer = (state = initialState, action) => {
    // console.log(action, 'action')
    switch (action.type){
        case GET_TODOS:
            return {...state, todo: action.payload}
        case ADD_TODO:
            return {...state, todo: [...state.todo, action.payload]}
        case DELETE_TODO:
            return {...state, todo: state.todo.filter(el => el.id !== action.payload)}
        case EDIT_TODO:
            return {...state, todo: state.todo?.map(item => item.id === action.payload.id ? action.payload : item)}
        default:
            return state
    }
}