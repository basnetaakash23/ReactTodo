import React, { useState }  from 'react';

// onChange={inputTextHandler} 

const Form = ({ todos, addItems, inputText}) => {
   
    const [name, setName] = useState('')
    

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        addItems({
            key: (Math.random()*1000).toString(),
            text:name,
            status: false
        });
    }
    

    const submitTodoHandler = (e) => {
        e.preventDefault();
        
        
        

        setName('');

        // setTodos([
        //     ...todos, {text:inputText, completed: false, id: Math.random() * 1000}
        // ]);
        // setInputText('')
    };

    const statusHandler = (e) => {
        // updateStatusTodos(e.target.value);
    }

    return(
        <form>
            <input value={name} onChange={handleChange} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
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
    );
};

export default Form;