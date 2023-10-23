import React from 'react'
import './partner.css'
const Partners = () => {
  return (
    <div className='main_cont_partner'>
        <h3 style={{fontSize:"larger"}}>Meet Our Partners</h3>
        <pre>{` __________ `}</pre>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum quas sed officia quam voluptatem, natus ut perferendis pariatur itaque eos excepturi perspiciatis velit exercitationem rerum obcaecati debitis maxime. Maxime porro veritatis quos qui repudiandae? Omnis veritatis, esse voluptatum illo quo ex fugit quia, magni officia distinctio facere quos temporibus itaque ipsam aliquam rem quis, voluptate quas asperiores. Mollitia, quos.
        </p>
        <div className='partners'>
            <div>
                <img alt="benz logo" src="https://cdn.iconscout.com/icon/free/png-512/free-mercedes-8-202855.png?f=webp&w=512" alt="" />
            </div>
            <div>
                <img alt="bmw logo" src="https://cdn.iconscout.com/icon/free/png-512/free-bmw-4-202746.png?f=webp&w=512" alt="" />
            </div>
            <div>
                <img alt="audi logo" style={{height:"150px",width:"150px",marginTop:"-25px"}} src="https://cdn.iconscout.com/icon/free/png-512/free-audi-6-282743.png?f=webp&w=512" alt="" />
            </div>
            <div>
                <img alt="volkwagan logo" src="https://cdn.iconscout.com/icon/free/png-512/free-volkswagen-51-202922.png?f=webp&w=512" alt="" />
            </div>
            <div>
                <img style={{height:"120px",width:"120px",marginTop:"-12px"}} src="https://cdn.iconscout.com/icon/free/png-512/free-toyota-1-202914.png?f=webp&w=512" alt="" />
            </div>
        </div>


    </div>
  )
}

export default Partners
