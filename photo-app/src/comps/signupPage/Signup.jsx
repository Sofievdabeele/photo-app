import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("../photoPage")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
    return (
        <section>

        <div className="login">
            <div className="title">   
                    <h2> Signup Form </h2> 
            </div>                                                                           
            <form className="login-form" action="">                                                                                     
                <div className="image-container">
                    <img src="./src/assets/user.png" alt="Avatar" className="avatar"/>
                </div>
                <div className="form-container">
                    <label htmlFor="email-address">Email address<br/></label>
                    <input
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                        required                                    
                        placeholder="Email address"                                
                    />
                    <br />
                    <label htmlFor="password">Password<br/></label>
                    <input
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required                                 
                        placeholder="Password"              
                    /> 
                    <br />                                      
                    <button
                        className="submit-button"
                        type="submit" 
                        onClick={onSubmit}                        
                        >Sign up  
                    </button>
                    <p>Already have an account?{' '}
                        <NavLink to="../loginPage">Sign in</NavLink>
                    </p>            
                </div>                                                        
            </form>
        </div>                         
        </section>
    )
}
export default Signup