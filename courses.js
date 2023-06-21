import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './loginback.css';
import Button from '@mui/material/Button';
let Courses=()=>{
    let n=useNavigate()
    function GoUserprofile(){
        n('/userprofile')

    }

    return(
        <nav>
            <div>
            <section class="course" id="course">
                <br></br><br></br><br></br><br></br><br></br>
                <h1 class="heading">our popular courses</h1>
                <div class="box-container">
                    <div class="box">
                    <img src="data:image/jpeg;base64,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"></img>
                        
                        <div class="content">
                            <a href="https://youtu.be/zJSY8tbf_ys" target="_blank"  class="title">Learn front end development</a>
                            <div class="info">
                                <h3><i></i> 2 hours</h3>
                                <h3><i></i> 6 months</h3>
                                <h3><i></i> 6 modules</h3>

                            </div>
                        </div>
                        </div>

                        <div class="box">
                    <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png"></img>
                        <div class="content">
                            <a href="https://youtu.be/R6RX2Zx96fE" target="_blank" class="title">Learn Fullstack web development</a>
                            <div class="info">
                                <h3><i></i> 2 hours</h3>
                                <h3><i></i> 12 months</h3>
                                <h3><i></i> 12 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg"></img>
                        <div class="content">
                            <a href="https://youtu.be/JL_grPUnXzY" target="_blank" class="title">Learn Data science</a>
                            <div class="info">
                                <h3><i></i> 3 hours</h3>
                                <h3><i></i> 8 months</h3>
                                <h3><i></i> 8 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg"></img>
                        <div class="content">
                            <a href="https://youtu.be/Nl3NJB3IJwo" target="_blank" class="title">Learn Machine Learning</a>
                            <div class="info">
                                <h3><i></i> 2 hours</h3>
                                <h3><i></i> 3 months</h3>
                                <h3><i></i> 6 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://www.fingent.com/wp-content/uploads/fingent-5-1024x555.jpg"></img>
                        <div class="content">
                            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI" target="_blank" class="title">Learn Artificial Intelligence</a>
                            <div class="info">
                                <h3><i></i> 4 hours</h3>
                                <h3><i></i> 8 months</h3>
                                <h3><i></i> 8 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_51ddbe10-6b83-4d6c-b762-ab26ab3a62b9.webp"></img>
                        <div class="content">
                            <a href="https://youtube.com/playlist?list=PLhNrFKat_aeIogDQc0xnEiZ2TLDKzZCEM" target="_blank" class="title">Learn Devops</a>
                            <div class="info">
                                <h3><i></i> 6 hours</h3>
                                <h3><i></i> 12 months</h3>
                                <h3><i></i> 12 modules</h3>

                            </div>
                        </div>
                        </div>
                   <div>
                    <Button onClick={GoUserprofile} class="btn">more info</Button>
                   </div>
                </div>
                </section>
            </div>
        </nav>
    )
}
export default Courses;