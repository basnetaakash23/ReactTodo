import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import {useState} from 'react';

export const findInitialPage = ({props}) => {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])

  return (
    
    );


}