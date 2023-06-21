import React,{useState} from "react";
import './loginback.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
let Home=()=>{
    let n=useNavigate()
    function GoUserprofile(){
        n('/userprofile')
    }
    return(
    <nav>
    <div>
         <section class="home" id="home">
            <h1>education from home</h1>
            <p>Education is the most important part of our life.We can join online education anywhere in the country or abroad. Today online education is proving to be very beneficial for students.</p>
            <Button onClick={GoUserprofile} class="btn">get started</Button>
                <div class="shape"></div>
                </section>
    </div>
    </nav>
    )
}
export default Home;