import React from 'react'
import './contact.css'
import {useContext } from 'react'
import {contactValidation} from '../AdditionalFunctions/contactValidation'
import {UserContextFromDisp} from './DisplayComponent'

const Contact = () => {

  const {contactData,setContactData,errorContactData,setErrorContactData}=useContext(UserContextFromDisp);

  const handleData=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setContactData((obj)=>{
      return{
        ...obj,
        [name]:value
      }
    })

  }

  const handleContact=(event)=>{
    event.preventDefault();
    contactValidation(contactData,setContactData,setErrorContactData);
  }

  return (
    <div className='main_cont_contact'>
      <div className='formContact'>
      <h3>Contact us</h3>
          <p>You have any questions or need additional information?</p>
          <p style={{fontWeight:"bold",fontSize:"small",marginBottom:"20px"}}><span>Address:</span> Car|Rental / 38-2 Madurai / TamilNadu, India 625016</p>
        <form onSubmit={(event)=> handleContact(event)}>
          <div className='name'>
            <input onChange={(event)=>{handleData(event)}} value={contactData.fname} name='fname' id='fname' type="text" placeholder='Fisrt Name :' />  
            <input onChange={(event)=>{handleData(event)}} value={contactData.lname} name='lname' id="lname" type="text" placeholder='Last Name :' />
          </div>
          <div>
            <span >{errorContactData.errFName || ""}</span>
            <span style={{marginLeft:'126px'}}>{errorContactData.errLName || ""}</span>
          </div>
          <div className='phone_contact'>
            <input onChange={(event)=>{handleData(event)}} value={contactData.phone} name='phone' type="text" placeholder='Phone Number :' />
            <span>{errorContactData.errPhone || ""}</span>
          </div>
          <div className='email_contact'>
            <input onChange={(event)=>{handleData(event)}} value={contactData.email} name='email' type="text" placeholder='Email :' />
            <span>{errorContactData.errMail || ""}</span>
          </div>
          <div className='message'>
            <textarea onChange={(event)=>{handleData(event)}} value={contactData.message} name="message" placeholder='Message :' id="" cols="30" rows="10">Message :</textarea>
            <span>{errorContactData.errMessage}</span>
          </div>
          <button className='con_button'>Submit</button>
        </form>

      </div>
      <div className='customerSupport'>
        <p id='p1'>Customer Executive</p>
        <div className='customer_center'>
          <div> 
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-business-avatar-men-businessmen-group-venture-460.png?f=webp&w=512" alt="" />
          </div>
          <div>
            <p className='customer_center_details' style={{fontSize:"large"}}>Rakul</p>
            <p className='customer_center_details'><span className='span'>Phone :</span> 957276373</p>
            <p className='customer_center_details'><span className='span'>Email : </span> r@gmail.com</p>
          </div>
        </div>
        <p id="p2">For Cancel</p>
        <div className='customer_center'>
          <div> 
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-business-avatar-men-businessmen-group-venture-460.png?f=webp&w=512" alt="" />
          </div>
          <div>
            <p className='customer_center_details' style={{fontSize:"large"}}>Rakul</p>
            <p className='customer_center_details'><span className='span'>Phone :</span> 957276373</p>
            <p className='customer_center_details'><span className='span'>Email : </span> r@gmail.com</p>
          </div>
        </div>
        <div className='customer_center'>
          <div> 
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-business-avatar-men-businessmen-group-venture-460.png?f=webp&w=512" alt="" />
          </div>
          <div>
            <p className='customer_center_details' style={{fontSize:"large"}}>Rakul</p>
            <p className='customer_center_details'><span className='span'>Phone :</span> 957276373</p>
            <p className='customer_center_details'><span className='span'>Email : </span> r@gmail.com</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
