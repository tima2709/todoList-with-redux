import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {todoReducer} from "./reducers/todo-reducer";


const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))