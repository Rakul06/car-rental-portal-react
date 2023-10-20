import React from 'react'
import './customerService.css'
const CustomerService = () => {
  return (
    <>
    <div className='custReview'>
    <h3>
        Customer Service
    </h3>
    <pre style={{marginTop:"-15px"}}>{` _______________  `}</pre>
    <div className='custReview-main'>
        <div className='reviews'>
        <i class="fa fa-plus-square" style={{fontSize:"34px"}} aria-hidden="true"></i>
        <p className='heading'> Special Rates on Car Booking</p>
        <p className='head-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nostrum unde itaque repellendus numquam pariatur.</p>
        </div>
        <div className='reviews'>
        <i class="fa fa-plus-square" style={{fontSize:"34px"}} aria-hidden="true"></i>
        <p className='heading'> Mobile Phone Reservation</p>
        <p className='head-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero cupiditate suscipit amet incidunt? Nostrum, temporibus.</p>

        </div>
        <div className='reviews'>
        <i class="fa fa-plus-square" style={{fontSize:"34px"}} aria-hidden="true"></i>
        <p className='heading'> Mobile Phone Reservation</p>
        <p className='head-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates deserunt eos possimus, consequuntur nulla.</p>

        </div>
        <div className='reviews'>
        <i class="fa fa-plus-square" style={{fontSize:"34px"}} aria-hidden="true"></i>
        <p className='heading'> Special Rates on Car Booking</p>
        <p className='head-content'>Lorem ipsum dolor sit amet,  sit amet, cons consectetur adipisicing elit. Mollitia omnis fugiat cumque adipisci doloribus ipsam.</p>

        </div>
    </div>
    </div>
    </>
  )
}

export default CustomerService