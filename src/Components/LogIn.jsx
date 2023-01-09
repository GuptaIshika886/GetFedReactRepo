import e from "cors";
import react,{useEffect, useState} from "react";
import {Navigate,useNavigate} from "react-router-dom";
// import Dashboard from "./Dashboard";
function LogIn()
{
    const[username,setUsername]=useState('')
    const[pwd,setPwd]=useState('')
    const[flag,setFlag]=useState('0')
    const[credentialsApi,setCredentialsApi]=useState({})
    const navigate=useNavigate()

    useEffect(() => {
        fetch('http://127.0.0.1:8000/serialized/')
        // fetch('http://127.0.0.1:8000/restaurants/')
        .then((res)=>res.json())
        .then((data)=>setCredentialsApi(data))
        // .then((data)=>console.log(data))
      }, []);
       
    
    const handleUsernameChange=(event,target)=>{
        const enteredUsername=event.target.value
        setUsername(enteredUsername)
        console.log(enteredUsername)
    }

    const handlePasswordChange=(event,target)=>{
        const enteredPwd=event.target.value
        setPwd(enteredPwd)
        console.log(enteredPwd)

    }

    const handleSubmitClick=(event,target)=>{
        event.preventDefault()
        console.log("I got Clicked")
        // console.log(credentialsApi)
        let count=0;
        {
            credentialsApi.map((item)=>{
                if (item.username===username && item.pwd===pwd)
                {
                    count++
                    
                }
            })
        }
        console.log(count)
        if(count !=0)
        {
            console.log("More")
            navigate('/dashboard')
        }
        else
        {
            navigate('/')
        }
    }

    return(
        <div>
            You are Inside Login.jsx   
            <form>
                <label>Username:</label>
                <input type="text" id="txUsername" onChange={(e,target)=>handleUsernameChange(e,target)}/>
                <br></br>
                <label>Password:</label>
                <input type="password" id="txtPwd" onChange={(e,target)=>handlePasswordChange(e,target)}/>
                <br></br>
                
            <button onClick={(e,target)=>{handleSubmitClick(e,target)}}>Submit</button>
            </form> 
        </div>
    );
}

export default LogIn