import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Signup from './comps/signupPage/Signup';


const Home = () => {

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
            navigate("/");
            alert("Signed out successfully");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              navigate("/photoPage");
              console.log("uid", uid)
            } else {
                navigate("/");  
                console.log("user is logged out")
            }
          });
         
    }, [])

    const navigateToLogin = () => {
        navigate('/loginPage');
      };
    
      const navigateToSignup = () => {
        // 👇️ navigate to /
        navigate('/signupPage');
      };
    return (
        <>
            <nav>
                <h2 className="index">Welcome to WanderShots</h2>
                <div className="buttons">
                    <button className="index" onClick={navigateToLogin}>
                        Login
                    </button>
                    <button className="index" onClick={navigateToSignup}>
                        Signup
                    </button>
                    <button className="index" onClick={handleLogout}>
                        Logout
                    </button>
      
                </div>

            </nav>
        </>
    )
}
export default Home;