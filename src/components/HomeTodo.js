import React, { useEffect }  from "react";
import TodoList from './TodoList'
import Logout from './LogOut'
import { useNavigate } from 'react-router-dom'

const HomeTodo = ({todos, text_item, handleChange, addItems, statusHandler, deleteTodos, completeTodos}) => {
	let navigate = useNavigate();
	useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
	return (
		<div className="App">
        <Logout />
        <header>
            <h1>ToDo List</h1>
        </header>

        <form>
            <input value={text_item} onChange={handleChange} type="text" className="todo-input" />
            <button onClick={addItems} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    
                </select>
               
            </div>
        </form>

        <TodoList todos={todos} deleteTodos = {deleteTodos} completeTodos = {completeTodos}/>
        </div>
		);
};

export default HomeTodo;