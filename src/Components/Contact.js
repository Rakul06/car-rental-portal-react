import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='main_cont_contact'>
      <div className='formContact'>
      <h3>Contact us</h3>
          <p>You have any questions or need additional information?</p>
          <p style={{fontWeight:"bold",fontSize:"small",marginBottom:"20px"}}><span>Address:</span> Car|Rental / 38-2 Madurai / TamilNadu, India 625016</p>
        <form action="">
          <div className='name'>
            <input id='fname' type="text" placeholder='Fisrt Name :' />
            <input  id="lname" type="text" placeholder='Last Name :' />
          </div>
          <div className='phone_contact'>
            <input type="text" placeholder='Phone Number :' />
          </div>
          <div className='email_contact'>
            <input type="text" placeholder='Email :' />
          </div>
          <div className='message'>
            <textarea name="" placeholder='Message :' id="" cols="30" rows="10">Message :</textarea>
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