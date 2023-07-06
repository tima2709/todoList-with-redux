import axios from "axios";
import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS} from "../types/types";


export const getTodos = () => {
    return(dispatch) => {
        axios('https://648da9b72de8d0ea11e81919.mockapi.io/info')
            .then(({data}) => {
                dispatch({type: GET_TODOS, payload: data})
            })
    }
}

export const addTodos = (newTodo) => {
    return(dispatch) => {
        axios.post(`https://648da9b72de8d0ea11e81919.mockapi.io/info`, newTodo)
            .then(({data}) => {
                dispatch({type: ADD_TODO, payload: data})
            })
    }
}

export const deleteTodo = (id) => {
    return(dispatch) => {
        axios.delete(`https://648da9b72de8d0ea11e81919.mockapi.io/info/${id}`)
            .then(({data}) => {
                dispatch({type: DELETE_TODO, payload: data.id})
            })
}}

export const editTodos = (value) => {
    return(dispatch) => {
        axios.put(`https://648da9b72de8d0ea11e81919.mockapi.io/info/${value.id}`, value)
            .then(({data}) => {
                dispatch({type: EDIT_TODO, payload: data})
            })
    }
}