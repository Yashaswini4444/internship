import React ,{useState}from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
let Login=()=>
{
    let n= useNavigate()
    function sign(){
        n("/sign")
    }
    const Login1 = async (e) => { 
        e.preventDefault()
         if(username=="") {
        alert("please enter username")
        }
        else if(password=="") {
        alert("please enter password")
         }
        else {
      let result=await axios.post("http://localhost:8080/hostaa/login/"+username+"/"+password)
        alert(result.data)
        var res=result.data;
        if(res=="success"){
            n('/userprofile')
        }
        else{
            n("/")
        }

        }}
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    
    return(
<nav>
        <div id="div1">
        <div id="div2">
        <div id="div3">
        <h1>Login</h1>
        <br></br><br></br>
        <label>Username:</label><br/>
        <input type='text' value={username} onChange={e=>setUsername(e.target.value)} id="inp1"></input><br/>
        <label>Password:</label><br/>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)} id="inp2"></input><br/>
        <br></br><br></br>
        <Button onClick={Login1} class="btn">Login</Button>
        <br></br><br></br>
        <button onClick={sign}>Signup</button>
              </div>  
            </div>
            </div>
            </nav>
    )
}
export default Login;