import React from "react";
import Login from "./loginpage";
import Userprofile from "./userprofile";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Register from "./register";
import Home from "./projecthome";
import About from "./about";
import Courses from "./courses";
import Teacher from "./teacher";
import Projcontact from "./projcontact";
function Pa(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/sign" element={<Register/>}></Route>
                <Route path="/userprofile" element={<Userprofile/>}></Route>
                <Route path="/projecthome" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/courses" element={<Courses/>}></Route>
                <Route path="/teacher" element={<Teacher/>}></Route>
                <Route path="/projcontact" element={<Projcontact/>}></Route>
                <Route path="/userprofile" element={<Userprofile/>}></Route>
                <Route path="/couses" element={<Courses/>}></Route>
                <Route path="/userprofile" element={<Userprofile/>}></Route>
                <Route path="/projcontact" element={<Projcontact/>}></Route>
                <Route path="/userprofile" element={<Userprofile/>}></Route>
            </Routes>
        </Router>
    )
}
export default Pa;