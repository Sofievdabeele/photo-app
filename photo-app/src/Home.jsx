import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              navigate("/photoPage/Title");
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
    return (
        <section>

        </section>
        //     <>
        // <nav>
        //     <h1>Welcome to WanderShots</h1>
        //     <div>
        //         <button onClick={handleLogout}>
        //             Logout
        //         </button>
        //     </div>

        // </nav>
        // </>
    )
}
export default Home;