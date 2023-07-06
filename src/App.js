import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodos, deleteTodo, editTodos, getTodos} from "./redux/action/todoAction";
import EditIcon from "./components/icons/edit-icon";
import DeletIcon from "./components/icons/delet-icon";
import Modal from "./components/Modal/Modal";

const App = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.todo)
    const [user, setUser] = useState({})
    const [editTodo, setEditTodo] = useState({})

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const handleAdd = () => {
        dispatch(addTodos(user))
        setUser({text: ''})
        setEditTodo('')
    }

    const handleDelete = (el) => {
        dispatch(deleteTodo(el.id))
    }


    return (
        <div className={'container'}>
            <div className={'input-btn'}>
                <input
                    type="text"
                    value={user.text}
                    onChange={(e) => setUser({...user, text: e.target.value})}
                />
                <button onClick={() => handleAdd()}>Add</button>
            </div>
            {
                todo?.map(el =>
                    <div key={el.id} className={'todos'}>
                        <h2>{el.text}</h2>
                        <div className={'btn-icon'}>
                            <button onClick={() => setEditTodo(el.id)}><EditIcon/></button>
                            <button onClick={() => handleDelete(el)}><DeletIcon/></button>
                        </div>
                    </div>
                )
            }
            {
                editTodo &&
                <Modal edit={editTodo} setEdit={setEditTodo}/>
            }
        </div>
    );
};

export default App;

