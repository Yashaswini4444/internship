import React from "react";
import './loginback.css';
import { useNavigate } from "react-router-dom";
import Home from "./projecthome";
let Userprofile=()=>{
    
    let n=useNavigate()
    function GoUserprofile(){
        n('/')
    }
    function Gohome(){
        n('/projecthome')
    }
    function Goabout(){
        n('/about')
    }
    function GoCourses(){
        n('/courses')
    }
    function GoTeacher(){
        n('/teacher')
    }
    function GoProjcontact(){
        n('/projcontact')
    }
    
    return(
        <div id="userimg">
            <div>
        <nav>
        <div>
            <header>
                <div id="menu" class="menu-bar"></div>
                <h1><a href="#" class="title"><i></i>ONLINE EDUCATION</a></h1>
                <nav class="navbar">
                    <ul>
                        <li><button onClick={Gohome}  >home</button></li>
                        <li><button onClick={Goabout}>about</button></li>
                        <li><button onClick={GoCourses} >course</button></li>
                        <li><button onClick={GoTeacher} >teacher</button></li>
                        <li><button onClick={GoProjcontact} >contact</button></li>
                    </ul>
                </nav>

            </header>
        </div>  
        </nav>
        </div>
        </div>
    )
}
export default Userprofile;
