import React from "react";
import TodoList from './TodoList'

const HomeTodo = ({todos, text_item, handleChange, addItems, statusHandler, deleteTodos, completeTodos}) => {
	return (
		<div className="App">
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