import './App.css';
import React from 'react';

// import Form from './components/Form';
// import TodoList from './components/TodoList';

import { app, db } from './components/firebase-config';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {
getFirestore,
query,
getDocs,
collection,
where,
addDoc, doc, setDoc, getDoc} from "firebase/firestore";

import FindInitialPage from './components/FindInitialPage';



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
      userName:''
      
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


  async addItems(e){
    e.preventDefault();
    const item = this.state.newItem;
    if(item.text !== ""){
      console.log("Added now");
      const _item = [...this.state.todos, item]
      const cityRef = doc(db, this.state.userName, this.state.userName);
      await setDoc(cityRef, { todos: this.state.todos }, { merge: true });

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
  async deleteTodos(todo, todos_){

    this.setState({
      todos: todos_.filter(el => el.key !== todo.key),
      newItem : {
        key:'',
        text:'',
        status:''
        }
    })

    const cityRef = doc(db, this.state.userName, this.state.userName);
    await setDoc(cityRef, { todos: this.state.todos }, { merge: true });

  }

  async completeTodos(todo){
    const st = !todo.status;
    
    this.setState(this.state.todos.map(item => {
            if(item.key == todo.key){
                item.status= st
              }
        }))
    const cityRef = doc(db, this.state.userName, this.state.userName);
    await setDoc(cityRef, { todos: this.state.todos }, { merge: true });

    

    
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

  

  async loginregisterUser(id, email, password, navigate){
    console.log("LoginRegister");
    console.log(email);
    console.log(password);
    
    const authentication = getAuth();
      if(id == 2){
        try{
        const res = await createUserWithEmailAndPassword(authentication, email, password)
        navigate('/home')
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        
        // this.state.user = res.user;
        const ref = doc(collection(db, res.user.uid));
        this.setState({userName : res.user.uid});
        await setDoc(res.user.uid,{
          email: email,
          reference: ref,
          todos: []
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    }
        // .then((response) => {
        //   navigate('/home')
        //   sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)

       
      
    else{
      const res = await signInWithEmailAndPassword(authentication, email, password);
      sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
      this.setState({userName : res.user.uid});
      const docRef = doc(db, res.user.uid, res.user.uid);
      const docSnap = await getDoc(docRef);
      console.log("Retreiveing Data");
      console.log(docSnap.data().todos);
      console.log("Query Snapshot");
      navigate('/home');
      this.setState({todos:docSnap.data().todos});
      }
      
    
    this.setState({
      user:{
        email:'',
        password:''
      }
    })
  }

  render(){
    return (
      <div>
          <FindInitialPage
            loginregisterUser = {this.loginregisterUser}
            todos = {this.state.todos}
            text_item = {this.state.newItem.text}
            handleChange = {this.handleChange}
            addItems = {this.addItems}
            statusHandler = {this.statusHandler}
            deleteTodos = {this.deleteTodos}
            completeTodos = {this.completeTodos}
          />
          </div>
          );
    }

}

export default App;