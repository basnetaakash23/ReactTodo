import './App.css';
import React from 'react';

// import Form from './components/Form';
// import TodoList from './components/TodoList';
import HomeTodo from './components/HomeTodo';
import Form from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { app } from './components/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { withRouter } from '.components/withRouter';


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
      inputText:'',
      user: {
          email:'',
          password:''
      }
    }
   
    this.addItems = this.addItems.bind(this);
    this.updateStatusTodos = this.updateStatusTodos.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.statusHandler = this.statusHandler.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
    this.completeTodos = this.completeTodos.bind(this);
    this.loginregisterUser = this.loginregisterUser.bind(this);
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

  loginregisterUser(id, email, password, navigate){
    console.log("LoginRegister");
    console.log(email);
    console.log(password);
    
    const authentication = getAuth();
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    
    this.setState({
      user:{
        email:'',
        password:''
      }
    })
  }

  render(){
    return (
      <Router>
          <div>
            <>
              <Routes>
                <Route path='/login' element={
                  <Form 
                    title = "Login"
                    email = {this.state.user.email}
                    password = {this.state.user.password}
                    loginregisterUser={this.loginregisterUser}
                      id = {1}
                  />
                } />
                <Route path='/register' element={<Form 
                    title = "Register"
                    email = {this.state.user.email}
                    password = {this.state.user.password}
                    loginregisterUser={this.loginregisterUser}
                      id = {2}
                  />} />


                <Route
                  path='/home'
                  element={
                    <HomeTodo todos = {this.state.todos} text_item = {this.state.newItem.text} handleChange = {this.handleChange} addItems = {this.addItems} statusHandler = {this.statusHandler} deleteTodos = {this.deleteTodos} completeTodos = {this.completeTodos}/>
                   }
                />
              </Routes>
            </>
            
          </div>
        </Router>
          );
    }

}

export default App;