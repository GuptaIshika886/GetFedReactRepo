import react,{useEffect, useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function Dashboard(){

    const[resApi,setResApi]=useState({})
    // const[searchItem]
    useEffect(()=>{
        // console.log("hi")
        fetch('http://127.0.0.1:8000/restaurants/')
        .then((res)=>res.json())
        .then((data)=>setResApi(data))
        // .then((data)=>console.log(data))
    },[])
    return(

        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={resApi.email}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search Item" />}
        />
    )
}

export default Dashboard