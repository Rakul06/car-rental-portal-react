import React, { useState ,useContext } from 'react'
import './book.css'
import { useNavigate  } from 'react-router-dom'
import {UserContextFromApp} from '../App'
import audi from '../img/audi a1 s-line.jpg'
import {UserContextFromDisp} from '../Components/DisplayComponent'

const Book = () => {

    const {carDetails}=useContext(UserContextFromApp);
    const {carBookingHome,setCarBookingHome}=useState(UserContextFromDisp);
    const navigate=useNavigate();

    
    const [showCarDetails,setShowCarDetails]=useState({
        brand:"Wolkshwagen",
        model:"VW Golf VII",
        seats:5,
        doors:4,
        price:"50$",
        transmission:"automatic",
        ac:"yes",
        img:"http://carrental.themeinjection.com/theme/img/vehicle1.jpg",

    })

    const handleSelect=(event)=>{
        const detailsToDisplay=carDetails[event.target.value-1];
        setShowCarDetails((obj)=>{
            return{
                ...obj,
                brand:detailsToDisplay.brand,
                model:detailsToDisplay.model,
                img:detailsToDisplay.img,
                price:detailsToDisplay.price
            }
        })
         
    }

   
  return (
    <div id="main-area">
            
            <div id="left">
                <select onChange={(event)=>handleSelect(event)} id="example" name="option" size="7" onclick="myFunction()">
                    <option style={{backgroundColor:"#e9d9ab"}} value="">Select your car type</option>
                    {
                        carDetails.length> 0 && carDetails.map((obj)=>(
                            <option value={obj.id}>{obj.model}</option>
                        ))
                    }
                </select>
            </div>

            <div id="center">
                <div id="quote"><h2 style={{fontSize:"larger",color:" #706c6e",marginTop:"30px",marginBottom:"100px"}}>Vehicle Models-Our rental cars</h2></div>
                <img  id="carImage" src={audi} alt="" />
                <p style={{marginLeft:"40%",marginTop:"5px"}} >{showCarDetails.model}</p>
            </div>

            <div id="right">
                <table>
                    <tr>
                        <th colspan="2">{showCarDetails.price} rent per day</th>   
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td>{showCarDetails.brand}</td>
                    </tr>
                    <tr>
                        <td>Model</td>
                        <td>{showCarDetails.model}</td>
                    </tr>
                    <tr>
                        <td>Seats</td>
                        <td>{showCarDetails.seats}</td>
                    </tr>
                    <tr>
                        <td>Doors</td>
                        <td>{showCarDetails.doors}</td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td>{showCarDetails.transmission}</td>
                    </tr>

                    <tr>
                        <td>A/C</td>
                        <td>{showCarDetails.ac}</td>
                    </tr>
                    
                    <tr>
                        <td colspan="2"><button>Reserve now</button></td>
                    </tr>
                </table>

            </div>

            
            
        </div>
  )
}

export default Book
