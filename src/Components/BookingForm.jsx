import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'
import {UserContextFromApp} from '../App'
import {UserContextFromDisp} from '../Components/DisplayComponent'

const BookingForm = () => {

    const {carDetails}=useContext(UserContextFromApp)
    const {carBookingHome}=useContext(UserContextFromDisp);

    return (
        <>
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
            <div className='main-cont'>
                <div className='header'>
                    <h4>COMPLETE RESERVATION</h4>
                </div>
                <div className='car'>
                    <div className='carDetails'>
                        <h4 style={{marginTop:"10px",marginBottom:"20px"}}>Location & Date</h4>
                        <div className='opt'>
                            <p className='head'> &#128664; pick-up location</p>
                            <p className="head-child" style={{fontSize:"small"}}>{carBookingHome.location}</p>
                        </div>
                        <div className='opt'>
                            <p className='head'> &#128664; drop location</p>
                            <p className="head-child" style={{fontSize:"small"}}>{carBookingHome.location}</p>
                        </div>
                        <div className='opt'>
                            <p className='head'> &#128664; pick-up date</p>
                            <p className="head-child" style={{fontSize:"small"}}>{carBookingHome.pickup}</p>
                        </div>
                        <div className='opt'>
                            <p className='head'> &#128664; drop date</p>
                            <p className="head-child" style={{fontSize:"small"}}>{carBookingHome.drop}</p>
                        </div>
                    </div>
                    <div className='carImg'>
                        <h4>CAR : {
                            carDetails.length>0 && carDetails[carBookingHome.carType-1].model
                        }</h4>
                        <img src={carDetails.length>0 && carDetails[carBookingHome.carType-1].img} alt="" />

                    </div>
                </div>
                <div className='foot'>
                        <button  type="submit" style={{backgroundColor:"#feca33"}}>Book now</button>
                        <button style={{backgroundColor:"#978f8f"}}>Cancel</button>
                </div>
                

            </div>
        </div>
        
        </>
    )
}

export default BookingForm;
