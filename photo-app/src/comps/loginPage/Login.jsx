import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { NavLink, useNavigate } from 'react-router-dom'
import '../../Login.css';

const Login = () => {     
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("../photoPage/Title")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return (
        <section>

        <div className="login">
            <div className="title">
                <h2>Login Form</h2>
            </div>
            
            <form className="login-form" action="">
                <div className="image-container">
                    <img src="./src/assets/user.png" alt="Avatar" className="avatar"/>
                </div>

                <div className="form-container">
                    <label className="login-label" htmlFor="email-address">Email Address<br/></label>
                    <input 
                        id="email-address"
                        className="login-input" 
                        type="email"
                        name="email" 
                        required                                                                                
                        placeholder="Email address"
                        onChange={(e)=>setEmail(e.target.value)} 
                    />
                    <br />

                    <label className="login-label" htmlFor="password">Password<br/></label>
                    <input 
                        id="password"
                        className="login-input" 
                        name="password"
                        type="password"                                    
                        required                                                                                
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <br />
                    <button className="submit-button" onClick={onLogin}>Login</button>
                    <br />
                    <label>
                       <input className="login-input" type="checkbox"/>Remember me
                    </label>
                    <div className="cancel-forgot">
                        <button className="cancel-button" type="button">Cancel</button>
                        <span className="psw">Forgot <a className="forgot-link" href="#">password?</a></span>
                    </div>
                    <p className="text-sm text-white text-center">No account yet? {' '}
                        <NavLink to="../signupPage">Sign up</NavLink>
                    </p>
                </div>

            </form>
        </div>
        </section>
    )
}
export default Login;


 