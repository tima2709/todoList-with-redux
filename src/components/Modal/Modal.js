import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editTodos} from "../../redux/action/todoAction";

const Modal = ({edit, setEdit}) => {
    const [textState, setTextState] = useState('')
    const todoId = useSelector(state => state.todo.todo.find(todo => todo.id === edit))
    const dispatch = useDispatch()

    const handleSave = () => {
        const value = {...todoId, text: textState}
        dispatch(editTodos(value))
        setTextState('')
        setEdit('')
    }
    return (
        <div>
            <button onClick={() => setEdit('')}>X</button>
            <h1>Its modal</h1>
            <input
                type="text"
                defaultValue={todoId?.text || textState.text}
                onChange={(e) => setTextState(e.target.value)}
            />
            <button onClick={handleSave}>
                save
            </button>
        </div>
    );
};

export default Modal;