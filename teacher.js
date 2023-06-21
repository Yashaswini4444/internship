import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './loginback.css';
import Button from '@mui/material/Button';
let Teacher=()=>{
    let n=useNavigate()
    function GoProjcontact(){
        n('/projcontact')
    }
    return(
        <nav>
            <div>
            <section class="teacher" id="teacher">
                    <h1 class="heading">our expert teachers</h1>
                    <p>"Teaching kids to count is fine, but teaching them what counts is best.” </p>
                    <ul>
                        <li><h2>Front end web development by "Zach Gollwitzer"</h2>
                            <li><h4>E-mail:zachgollwitzer@gmail.com</h4></li>
                            <li>Twitter:https://t.co/7XnQhOzbkc</li>
                        </li>
                        <li><h2>Full stack web development by "Tomi Tokko" and "Beau Carnes"</h2>
                            <li><h4>E-mail:tomitokko@gmail.com,beaucarnes@gmail.com</h4></li>
                        </li>
                        <li><h2>Artificial intelligence by "Varunaina"</h2>
                            <li><h4>E-mail:varunaina@gmail.com</h4></li>
                        </li>
                        <li><h2>Machine Learning by "WsCube Tech"</h2>
                            <li><h4>E-mail:wscubetech@gmail.com</h4></li>
                        </li>
                        <li><h2>Data science by "Dhaval"</h2>
                            <li><h4>E-mail:dhaval@gmail.com</h4></li>
                        </li>
                        <li><h2>Devops by "Dhurga"</h2>
                            <li><h4>E-mail:dhurgaprasad@gmail.com</h4></li>
                        </li>
                    </ul>
                    <br></br><br></br><br></br>
                    <Button onClick={GoProjcontact} class="btn">Contact us</Button>
                </section>
            </div>
        </nav>
    )
}
export default Teacher;