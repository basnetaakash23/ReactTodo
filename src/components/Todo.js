import React, { useState } from "react";

const Todo = ({todos, todo, completeTodos, deleteTodos}) =>
{


    //events
    const deleteHandler = (e) => {
        let el = e.target.value;
        console.log("deleteA");
        console.log(todo.text);
        deleteTodos(todo, todos);
        
      
    };
    if(todo.text === ""){
       
    }
    const completeHandler = (el) =>{
        completeTodos(todo);
    
};

    return(
        <div className="todo">
            <li className={`todo-item ${todo.status ? "completed" : ""}`}>{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;