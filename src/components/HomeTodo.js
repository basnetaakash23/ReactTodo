import React, { useEffect, useState }  from "react";
import Todo from './Todo'
import Logout from './LogOut'
import { useNavigate } from 'react-router-dom'
import AuthService from "../services/auth-service"
import ToDoDataService from "../services/todo.service"

const HomeTodo = ({text_item, statusHandler, deleteTodos, completeTodos}) => {
	let navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [todo, setTodo] = useState({text:'', status:false, userName:''});
	useEffect(() => {
	    let currentUser = AuthService.getCurrentUser();


        if (currentUser) {
            console.log(currentUser);
//            navigate('/home')
            ToDoDataService.getAll()
            .then(response => {
                console.log(response);
                setRowData(response.data);
                
            })
            .catch(error => {
                console.log(error);
            });
        }

        if (!currentUser) {
            navigate('/login')
        }
    }, [])

    const handleChange = (e) => {
        setTodo({
            text: e.target.value,
            userName: AuthService.getCurrentUser().username,
            status: false
        }       
        );

        
    };

    const addItems = () => {
        if(todo.text !== ''){
            ToDoDataService.create(todo);
            setRowData([...rowData, todo]);
        }
    }


	return (
		<div className="App">
        <Logout />
        <header>
            <h1>ToDo List</h1>
        </header>

        <form>
            <input value={todo.text} onChange={handleChange} type="text" className="todo-input" />
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

        <Todo rowData={rowData}/>
        </div>
		);
};

export default HomeTodo;