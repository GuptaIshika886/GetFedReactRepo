import react from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LogIn from "./LogIn";
function Header()
{
    const navigate=useNavigate();
    const handleLogInClick=(event)=>{
        navigate('/login')
    }
    const handleSignUpClick=(event)=>{
        navigate('/signup')
    }
    return(
        <div>
        <button onClick={((e)=>handleLogInClick(e))}>Log In</button>
        <button onClick={(e)=>handleSignUpClick(e)}>Sign Up</button>
        </div>
    );
}

export default Header