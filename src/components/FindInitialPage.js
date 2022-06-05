import * as React from 'react';
import {useState, useEffect} from 'react';
import HomeTodo from './HomeTodo';
import Form from './LoginForm';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

const FindInitialPage = ({loginregisterUser, todos, text_item, handleChange, addItems, statusHandler, deleteTodos, completeTodos}) => {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
    else{
      navigate('/login')
    }
  }, [])

  return (
          <div>
            <>
              <Routes>
                <Route path='/login' element={
                  <Form 
                    title = "Login"                  
                    loginregisterUser={loginregisterUser}
                      id = {1}
                  />
                } />
                <Route path='/register' element={<Form 
                    title = "Register"
                    loginregisterUser={loginregisterUser}
                      id = {2}
                  />} />


                <Route
                  path='/home'
                  element={
                    <HomeTodo todos = {todos} text_item = {text_item} handleChange = {handleChange} addItems = {addItems} statusHandler = {statusHandler} deleteTodos = {deleteTodos} completeTodos = {completeTodos}/>
                   }
                />
              </Routes>
            </>
            
          </div>
        
    );
}

export default FindInitialPage;