import * as React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";


const LogOut = () => {
	let navigate = useNavigate();

	const UserLogout = (e) =>{
		e.preventDefault();
		sessionStorage.setItem('Auth Token', '');
		const auth = getAuth();
		signOut(auth).then(() => {
		  // Sign-out successful.
		  navigate('/login');
		}).catch((error) => {
		  // An error happened.
		});
		
	}
	

	return (
		<div className="logOut">
			<button onClick={UserLogout} className="logOut-button" type="submit">
              	Log Out
            </button>
		</div>
		)

}
export default LogOut;