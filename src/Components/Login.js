import React from 'react';
import './Login.css'
import benz from '../img/Benz.png'
import { useState ,useEffect,useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { UserContextFromApp } from '../App';
import {UserContextFromDisp} from '../Components/DisplayComponent'
import {fecthDetails} from '../App'
import {loginValidation} from '../AdditionalFunctions/loginValidation'


const Login = ({setShowNav,setUserName}) => {

  const {carDetails}=useContext(UserContextFromApp)
  const {setCarBookingHome}=useContext(UserContextFromDisp);

  console.log("carr from  loin.js context ", carDetails)

  const navigate=useNavigate();
  const [regUsers,setRegUsers]=useState([]);

  const[userDetails,setUserDetails]=useState({
    userName:"",
    passWord:""
  });
  const [error,setError]=useState({
    mailError:"",
    passError:""
  });
  const [loginTF,setLoginTF]=useState({
    mailErrorTF:false,
    passErrorTF:false
  });
  
  useEffect(()=>{
    fecthDetails("https://testdata-9o57.onrender.com/regDetails", setRegUsers)
  },[])

  let handleDetails=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setUserDetails((obj)=>{
      return({...obj,[name]:value})
    })
    

  }

  let validateData=(event)=>{
    event.preventDefault();
    loginValidation(userDetails,setError,regUsers,setLoginTF,loginTF,setShowNav,setCarBookingHome,setUserName,navigate);  
  }
  return (
    <>
      <div className='main-container'>
        <div className='form'>
          <form action="" onSubmit={(event)=>validateData(event)}>
            <h2>Login</h2>
            <div className='uname'>
              <label style={{display:"block"}} htmlFor="">User email</label>
              <input type="text" value={userDetails.userName || ""} name='userName' onChange={handleDetails}/>
            </div>
            <span id="userNameError">{error.mailError}</span>
            <div className='upass'>
              <label style={{display:"block"}} htmlFor="">Password</label>
              <input type="password" name="passWord"  value={userDetails.passWord || ""} onChange={handleDetails}/>
              <br />
              <span id="passWordError">{error.passError}</span>
            </div>
            
            
            <p><button id="btn" type='submit'>Login</button></p>
            <span id="invalid" style={{marginLeft:"46px"}}></span>
            <div style={{fontSize:"large",padding:"10px",marginTop:"20px"}}>
              <Link>Forgot Password ?</Link>
              <div style={{float:"right"}}><Link to="/Login/Register"> Register Here !!!</Link></div>
            </div>
          </form>
        </div>
        <div className='image'>
          <p ><b style={{color:"#706c6e"}}>LUXURY CAR FROM RS.5000 PER DAY </b></p>
          <p style={{fontSize:"large",color:"#fffefe",}}>Treat yourself in INDIA</p>
          <img src={benz} alt="" />
        </div>
      </div>
    </>
    

  )
}

export default Login
