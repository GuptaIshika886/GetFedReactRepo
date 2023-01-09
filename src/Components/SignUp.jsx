import { useEffect, useState } from "react";
import react from "react";
import { Navigate, useNavigate } from "react-router-dom";
function SignUp()
{
    const navigate=useNavigate()
    const[details,setDetails]=useState(
        {
            username:"",
            email:"",
            pwd:"",
            cpwd:""
        }
    )
    function handleCPwdChange(event){
        const newData={...details}
        newData[event.target.id]=event.target.value
        setDetails(newData)
        console.log(newData)
     
    }
    function handleSubmitClick(event,target){
        event.preventDefault()
        const url='http://127.0.0.1:8000/serialized/'
        fetch(url, { 

        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(
            {
                username:details.username,
                email:details.email,
                pwd:details.pwd,
                cpwd:details.cpwd
            }
        ) 
  
      }).then((res)=>res.json())
      .then((data)=>console.log(data))
      navigate('/login')
    }
    
    return(
        <div>
            You are inside Sign Up.jsx
            <form>
            <label>Username:</label>
            <input type="text" name="txtUsername" id="username"  onChange={(event)=>{handleCPwdChange(event)}} />
            <br></br>
            <label>Email:</label>
            <input type="email" name="txtEmail" id="email"  onChange={(event)=>{handleCPwdChange(event)}} />
            <br></br>
            <label>Password:</label>
            <input type="password" name="txtPwd" id="pwd"  onChange={(event)=>{handleCPwdChange(event)}} />
            <br></br>
            <label >Confirm Password:</label>
            <input type="password" name="txtCPwd" id="cpwd"  onChange={(event)=>{handleCPwdChange(event)}} />
            <br></br>
            <button onClick={(e,target)=>{handleSubmitClick(e,target)}}>Submit</button>
            </form>
        </div>
    );
}

export default SignUp