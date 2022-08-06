import * as React from 'react';

import HomeTodo from './HomeTodo';
import Logout from './LogOut';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Routes, Route} from 'react-router-dom'

const FindInitialPage = ({loginregisterUser, todos, text_item, deleteTodos, completeTodos}) => {
  
  return (
          <div>
            <>
              <Routes>
                <Route path='/login' element={
                  <LoginForm 
                    title = "Login"                  
                    loginregisterUser={loginregisterUser}
                      id = {1}
                  />
                } />
                <Route path='/register' element={<RegisterForm 
                    title = "Register"
                    loginregisterUser={loginregisterUser}
                    id = {2}
                  />} />


                <Route
                  path='/home'
                  element={
                    <HomeTodo todos = {todos} text_item = {text_item} deleteTodos = {deleteTodos} completeTodos = {completeTodos}/>
                   }
                />

                <Route
                  path='/logout'
                  element = {<Logout />}
                  />

                
              </Routes>
            </>
            
          </div>
        
    );
}

export default FindInitialPage;