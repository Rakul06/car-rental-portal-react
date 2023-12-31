import React, { useContext, useEffect,useState } from 'react';
import './Home.css';
import car from '../img/Benz.png'
import bmw from '../img/BMW.png'
import { useNavigate } from 'react-router-dom';
import {UserContextFromApp} from '../App'
import {UserContextFromDisp} from './DisplayComponent'
import CustomerService from './CustomerService';
import CustomerReview from './CustomerReview';
import Partners from './Partners';
import Contact from './Contact';
import {homeValidation} from "../AdditionalFunctions/homeValidation"
import {carSlides} from '../AdditionalFunctions/slide'



const Home = () => {
  const {carDetails}=useContext(UserContextFromApp);
  console.log(carDetails , "from home js")
  const {carBookingHome,setCarBookingHome,homeErrMssg,setHomeErrMssg}=useContext(UserContextFromDisp);

  const navigate=useNavigate();
  let date = new Date();
	let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();

  const handleChange=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setCarBookingHome((obj)=>{
      return({...obj,[name]:value});
    })
    console.log(carBookingHome)
  }  

  useEffect(()=>{
    carSlides();
  },[])


  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(document.getElementById("displayCars"))
    if(carBookingHome.login===true){
      const otherDetails=homeValidation(carBookingHome,setHomeErrMssg);
      if(otherDetails===true){
        navigate("/Bookcar")
      }
    }
    else{
      document.getElementById("errorMssgBooking").innerHTML="please login to continue";
    }
    
  }

  return (
    <div>
      <div className='homeTop'>

      </div>
        <div className='main-conatiner'>
          <div className='booking-form'>
            <form action="" className='carBookForm' onSubmit={(event)=>{
                handleSubmit(event)
              }}>
              <select  name="carType" id="displayCars" value={carBookingHome.carType} onChange={handleChange}>
                <option value="">Select your car type</option>
                {
                  carDetails.length>0 && carDetails.map((carD)=>(
                    <>
                      <option key={carD.id} value={carD.id}>{carD.model}</option> 
                    </>
                  ))
                  }
              </select>
              <span className='homeErrMssg'>{homeErrMssg.select}</span>
              
              <div className='pick-upLocation'>
                  <label htmlFor="">Location</label>
                  <input  type="text" name='location' value={carBookingHome.location||""} placeholder='Enter city' onChange={handleChange}/>
                  <span className='homeErrMssg' >{homeErrMssg.location}</span>
              </div>
              <div className='pick-upDate'>
                <label htmlFor="">Pick-up</label>
                <input  min={current_date} type="date" name='pickup' value={carBookingHome.pickup ||""} onChange={handleChange} />
                <span className='homeErrMssg'>{homeErrMssg.pickup}</span>
                
              </div>
              <div style={{marginBottom:"30px"}} className='pick-upDate'>
                <label style={{paddingRight:"49px"}} htmlFor="">Drop</label>
                <input  min={current_date} type="date" name='drop' value={carBookingHome.drop || ""} onChange={handleChange} />
                <span className='homeErrMssg'>{homeErrMssg.drop}</span>
                
              </div>
              <p><button className="btn" type='submit'>CONTINUE CAR RESERVATION</button></p>
              <span id="errorMssgBooking" style={{textAlign:"center"}}></span>
            </form>
          </div>
          <div className='image'>
            <div className='Text'>
              <b>GET 15% OFF YOUR RENTAL</b>
              <p style={{color:"white"}}>Plan your trip now</p>
            </div>
            <div>
            <img id="carImg" src={car} alt="" />
            </div>
            
          </div>
          <div className='image'>
            <div className='Text'>
              <b>LUXURY CAR FROM RS.5000 PER DAY</b>
              <p style={{color:"white"}}>Treat yourself in INDIA</p>
            </div>
            <div>
            <img id="carImg2" src={bmw} alt="" />
            </div>
            
          </div>
        </div>

        <CustomerService/>
        <CustomerReview/>
        <Partners/>
        <Contact/> 
        
    </div>
  )
}

export default Home;
