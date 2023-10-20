import React from 'react'
import benz from '../img/Benz.png'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import {UserContextFromApp} from '../App'
import {UserContextFromDisp} from '../Components/DisplayComponent'
import { useContext } from 'react';
import {validationFromReg} from '../AdditionalFunctions/validationFromReg'

const RegisterPage = () => {

  const {regDetails,setRegDetails}= useContext(UserContextFromDisp)
  console.log(regDetails,"jsjsj reg details")
  const navi=useNavigate();
  let handleDetails=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setRegDetails((obj)=>{
      return({...obj,[name]:value})
    })
    
  }

  let handleSubmit=async(event)=>{
    let passReq=false;
    let passMatch=false;
    let otherReq=validationFromReg(regDetails);
    console.log(otherReq)
    event.preventDefault();
    let password=regDetails.password;
    let confirmPass=regDetails.cpassword;
    console.log("running")
    let requirement= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!password.match(requirement)){
      document.getElementById("passWordRequire").innerHTML="password does not meet requirements (Min 8 chars atleast 1 special char, upper case , lower case)"
      passReq=false;
    }
    else{
      document.getElementById("passWordRequire").innerHTML=""
      passReq=true;
    }
    if(confirmPass!==password){
      document.getElementById("confirmPassword").innerHTML="password does not match"
      passMatch=false
    }
    else{
      document.getElementById("confirmPassword").innerHTML=""
      passMatch=true
    }
    console.log("passma"+passMatch)
    console.log("req"+passReq)
    if(passMatch && passReq && otherReq){
      await axios.post("https://testdata-9o57.onrender.com/regDetails",regDetails).then
      (res=>console.log("success")).catch(err=> console.log("error"))
      navi(-1);
      setRegDetails("");
      alert("Successfully Registerd... \nPlease login into continue...");
    }
  }
  
  return (
    <>
      <div className='main-container'>
        <div className='form' >
          <form  action="" onSubmit={handleSubmit} style={{overflow:"scroll"}}>
            <h2 >Register Here</h2>
            <div className='uname'>
              <label style={{display:"block"}} htmlFor="">Name</label>
              <input  type="text" value={regDetails.name || ""} onChange={handleDetails}  name='name' />
            </div>
            <span id="userNameError"></span>
            <div className='upass'>
              <label style={{display:"block"}} htmlFor="">Age</label>
              <input  name="age" onChange={handleDetails} value={regDetails.age || ""} />
              <br />
              <span id="ageError"></span>
            </div>
            <div className='upass'>
              <label style={{display:"block"}} htmlFor="">Phone Number</label>
              <input  name="phone" onChange={handleDetails} value={regDetails.phone || ""} />
              <br />
              <span id="phoneError"></span>
            </div>
            
            <div className='upass'>
              <label style={{display:"block"}} htmlFor="">Email</label>
              <input  type='' name="email" onChange={handleDetails} value={regDetails.email || ""}/>
              <br />
              <span id="mailError"></span>
            </div>
            <div className='upass'>
              <label style={{display:"block"}} htmlFor="">Password</label>
              <input type='password' onChange={handleDetails} value={regDetails.password || ""} name="password"/>
              <br />
              <span id="passWordRequire"></span>
            </div>
            <div className='upass'>
              <label style={{display:"block"}} htmlFor="">Confirm Password</label>
              <input  type='password' onChange={handleDetails} value={regDetails.cpassword || ""} name="cpassword"/>
              <br />
              <span id="confirmPassword"></span>
            </div>
            
            
            <p><button id="btn" type='submit' >Register</button></p>
            
          </form>
        </div>
        <div className='image'>
            <div className='Text'>
              <b style={{color:"#706c6e"}}>GET 15% OFF YOUR RENTAL</b>
              <p style={{color:"white"}}>Plan your trip now</p>
            </div>
            <img src={benz} alt="" />
          </div>
      </div>
    </>
  )
}

export default RegisterPage