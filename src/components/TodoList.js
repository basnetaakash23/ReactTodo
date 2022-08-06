import React from "react";
//components

import Todo from "./Todo";


const TodoList = ({ todos, deleteTodos, completeTodos}) => {

        return (  
            <div className="todo-container">
            
               
                    <Todo
                    todos={todos}
                    deleteTodos = {deleteTodos}
                    completeTodos = {completeTodos}/>
                
            
                            
        </div>
        
        );
 
};

export default TodoList;