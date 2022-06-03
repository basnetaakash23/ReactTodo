import './App.css';
import React from 'react';

import Form from './components/Form';
// import TodoList from './components/TodoList';
import HomeTodo from './components/HomeTodo';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      filteredTodos:[],
      newItem : {
        key:'',
        text:'',
        status:''
      },
      inputText:''
    }
    this.addItems = this.addItems.bind(this);
    this.updateStatusTodos = this.updateStatusTodos.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.statusHandler = this.statusHandler.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
    this.completeTodos = this.completeTodos.bind(this);
  }
  addItems(e){
    e.preventDefault();
    const item = this.state.newItem;
    if(item.text !== ""){
      console.log("Added now");
      const _item = [...this.state.todos, item]
      this.setState({
        todos: _item,
        newItem : {
        key:'',
        text:'',
        status:''
        }
      })
    }
    
    console.log(this.state.todos);
    this.state.todos.forEach((todo) => {
      console.log(todo);
      console.log("P");
    });
  }
  updateStatusTodos(){}
  deleteItem(){}

  handleChange(e){
    e.preventDefault();
    this.setState({
      newItem:{
        text: e.target.value,
        key: Date.now().toString(),
        status: false
      }
    })
  }

  statusHandler(e){}

  deleteTodos(todo, todos_){

    this.setState({
      todos: todos_.filter(el => el.key !== todo.key),
      newItem : {
        key:'',
        text:'',
        status:''
        }
    })
  }

  completeTodos(todo){
    const st = !todo.status;
    
    this.setState(this.state.todos.map(item => {
            if(item.key == todo.key){
                item.status= st
              }
        }))
  }

  render(){
    return ( 
          <HomeTodo todos = {this.state.todos} text_item = {this.state.newItem.text} handleChange = {this.handleChange} addItems = {this.addItems} statusHandler = {this.statusHandler} deleteTodos = {this.deleteTodos} completeTodos = {this.completeTodos}/>
          );
    }

}

export default App;