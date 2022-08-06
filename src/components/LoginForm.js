import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import AuthService from "../services/auth-service";

export default function BasicTextFields({title, loginregisterUser,id}) {
    const [state, setState] = useState({email_:'',password_:''});
    
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }
    
     }, [navigate])
     
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setState({
                ...state,
                [e.target.name]: value
                });
    }

    
    const submitHandler = () => {
        console.log(state.email_);
        if(state.email_ !== '' && state.password_ !== ''){
            AuthService.login(state.email_, state.password_).then(()=>{
                navigate('/home');
                }
            )
            setState({email_:'',password_:''})
        }
        
    }
    return (
        <div>
            <div className="heading-container">
                <h3>
                    {title} Form
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <input value = {state.email_} onChange = {handleChange} name="email_" type="text" className = "user-email" />
                <input value = {state.password_} onChange = {handleChange} name="password_" type="text" className = "user-password" />
            </Box>
            <Button variant="contained" onClick = {submitHandler}>{title}</Button>
        </div>
    );
}