import '../../Login.css';
const Login = () => {     

    return (
        <div className="login">
            <div className="title">
                <h2>Login Form</h2>
            </div>
            
            <form className="login-form" action="">
                <div className="image-container">
                    <img src="./src/assets/user.png" alt="Avatar" className="avatar"/>
                </div>

                <div className="form-container">
                    <label className="login-label" htmlFor="uname">Username<br/></label>
                    <input className="login-input" type="text" placeholder="Enter Username" name="uname" required />
                    <br />
                    <label className="login-label" htmlFor="psw">Password<br/></label>
                    <input className="login-input" type="password" placeholder="Enter Pasword" name="password" required />
                    <br />
                    <button className="submit-button" type="submit">Login</button>
                    <br />
                    <label>
                       <input className="login-input" type="checkbox"/>Remember me
                    </label>
                    <div className="cancel-forgot">
                        <button className="cancel-button" type="button">Cancel</button>
                        <span className="psw">Forgot <a className="forgot-link" href="#">password?</a></span>
                    </div>
                </div>

            </form>
        </div>
    )
}
export default Login;


 