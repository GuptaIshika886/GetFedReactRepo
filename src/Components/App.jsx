import React from "react";
import Home from "./Home";
import Header from "./Header";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import ShowingRoute from "./ShowingRoute";
import feedback  from "./feedback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App()
{
    return(
       
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ShowingRoute" element={<ShowingRoute />} />
            <Route path="/feedback" element={<feedback />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App
