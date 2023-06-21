import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import './loginback.css';
let About=()=>{
    let n=useNavigate()
    function GoCourses(){
        n('/courses')
  
    }
    return(
        <nav>
            <div>
            <section class="about" id="about">
                    <div class="image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe73OjOTANM_emLUt0uY_igIUND3sgyABDpw&usqp=CAU" ></img>
                        </div>
                    <div class="content">
                        <h3>why choose us?</h3>
                        <p>One of the biggest advantages of online learning is that it offers flexibility. Courses are self-paced, which means users can complete assignments within a specific time frame. Participants access the lessons through a Learning Management System (LMS), follow the instructions, and complete the material.</p>
                        <p>As an online student, you can study anytime anywhere. There are no physical class sessions. Online learning a good option for students who need to balance their work and family commitments.</p>
                        <Button onClick={GoCourses} class="btn">learn more</Button>
                    </div>
                </section>
            </div>
        </nav>
    )
}
export default About;