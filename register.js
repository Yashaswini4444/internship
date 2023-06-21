import React ,{useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginback.css';
let Register=()=>
{ 
    let n=useNavigate()
    const Saved=async(e)=>{
        e.preventDefault();
        let mydaa={username:lusername,email:lemail,password:lpassword}
        if(lusername==''){
            alert("enter user name")
        }
        else if(lemail==''){
            alert("enter email")
        }
        else if(lpassword==''){
            alert("enter password")
        }
        else{
        let result=await axios.post("http://localhost:8080/hostaa/postdataaa",mydaa);
        alert(result.data)
        var res=result.data;

    }
    }
     const [lusername,setUsername]=useState("");
     const [lemail,setEmail]=useState("");
     const [lpassword,setPassword]=useState("");
    return(
                 <div id="div1">
                    <div id="div2">
                        <div id="div3">
                    <h2>Sign up</h2><br/>
                    <label>Username :</label><br/>
                    <input type='text' required  onChange={e=>setUsername(e.target.value)} id="inp1"/><br/>
                    <label>Email :</label><br/>
                    <input type='email' required  onChange={e=>setEmail(e.target.value)} id="inp3" /><br/>
                    <label>Password :</label><br/>
                    <input type='password'required onChange={e=>setPassword(e.target.value)} id="inp2" /><br/>
            <Button onClick={Saved}>SignUp</Button><br/> 
            <p>Already have account <a href='/'>Login</a></p>
            </div>
            </div>
            </div>
    )}
export default Register;