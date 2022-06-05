import React from "react";
//components

import Todo from "./Todo";

const TodoList = ({ todos, deleteTodos, completeTodos}) => {

        return (  
            <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                    todos={todos}
                    todo={todo}
                    deleteTodos = {deleteTodos}
                    completeTodos = {completeTodos}
                    /> 
                ))}
            </ul> 
                            
        </div>
        
        );
 
};

export default TodoList;