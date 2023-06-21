import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

import './loginback.css';
let Projcontact=()=>{
    let n=useNavigate()
    function GoUserprofile(){
        n('/userprofile')
    }
    return(
        <nav>
            <div>
            <section class="contact" id="contact">
                    <h1 class="heading">contact us</h1>
                    <div class="row">
                        <form action="">
                            <input type="text" placeholder="Full Name" class="box"></input>
                            <input type="email" placeholder="your email" class="box"></input>
                            <input type="password" placeholder="your password" class="box"></input>
                            <input type="Number" placeholder="your Number" class="box"></input>
                            <textarea name=" " id=" " cols="30" rows="10" class="box address" placeholder="your address"></textarea>
                            <input type="submit" class="btn" value="send now"></input>
                        </form>
                        <div class="image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9ER9hKBzdzm5aWYSrzx--U_XH3I8NUA4-w&usqp=CAU" alt=""></img>
                        </div>
                    </div>
                    <div><Button onClick={GoUserprofile} class="btn">Go back to menu</Button></div>
                </section>
            </div>
        </nav>
    )
}
export default Projcontact;