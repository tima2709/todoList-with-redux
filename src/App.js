import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodos, deleteTodo, editTodos, getTodos} from "./redux/action/todoAction";
import EditIcon from "./components/icons/edit-icon";
import DeletIcon from "./components/icons/delet-icon";

const App = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.todo)
    const [user, setUser] = useState({})
    const [editTodo, setEditTodo] = useState({})
    const todoId = useSelector(state => state.todo.todo.find(el => el.id === editTodo))

    console.log(todo, 'todo')

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const handleAdd = () => {
        dispatch(addTodos(user))
        setUser({text: ''})
    }

    const handleDelete = (el) => {
        dispatch(deleteTodo(el.id))
    }

    const handleEdit = () => {
        const value = {...todoId, text: user}
        dispatch(editTodos(value))
    }


    return (
        <div className={'container'}>
            <div className={'input-btn'}>
                <input
                    type="text"
                    value={user.text || editTodo.text}
                    onChange={(e) => setUser({...user, text: e.target.value})}
                />
                <button onClick={() => handleAdd()}>Add</button>
            </div>
            {
                todo?.map(el =>
                    <div key={el.id} className={'todos'}>
                        <h2>{el.text}</h2>
                        <div className={'btn-icon'}>
                            <button onClick={() => handleEdit(el.id)}><EditIcon/></button>
                            <button onClick={() => handleDelete(el)}><DeletIcon/></button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default App;

