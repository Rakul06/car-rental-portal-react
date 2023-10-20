import React, { useEffect } from 'react'
import './customerReview.css';
import {showSlides} from '../AdditionalFunctions/slide'

const CustomerReview = () => {
    useEffect(()=>{
        setTimeout(showSlides(),3000)
    },[])
    

  return (
    <div className='main_cont_rev'>
        <div >
            <i style={{padding:"3px"}} class="fa fa-star" aria-hidden="true"></i>
            <i style={{padding:"3px"}} class="fa fa-star" aria-hidden="true"></i>
            <i style={{fontSize:"35px",padding:"3px"}} class="fa fa-star" aria-hidden="true"></i>
            <i style={{padding:"3px"}} class="fa fa-star" aria-hidden="true"></i>
            <i style={{padding:"3px"}} class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div className='slides'>
            <p className='rev_slides'>
                Lorem ipsum dolor sit amet, adipisicing elit. Consectetur, veritatis corrupti commodi dicta, molestias saepe placeat animi beatae aspernatur vero dolorum impedit explicabo nobis qui consequatur sit. Voluptates debitis consequatur sed dicta eveniet accusamus, doloribus ratione cumque, est animi veritatis...
            </p>
            <p className='rev_author'>- Rakul {`(customer review)`}</p>

        </div>
        <div className='slides'>
            <p className='rev_slides'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex cupiditate consequatur optio nemo nam totam hic aliquam, facere magni veritatis temporibus mollitia ducimus, saepe quos autem, est eaque dignissimos corporis quod voluptatum. Esse libero quam, neque animi odio tempora?
            </p>
            <p className='rev_author'>- Karan {`(customer review)`}</p>

        </div>
        <div className='slides'>
            <p className='rev_slides'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cumque debitis repellendus, qui maiores porro placeat aliquam repellat nisi corrupti in. Numquam voluptas repudiandae incidunt quam temporibus officiis alias, eaque quo soluta provident dolores dicta reprehenderit quos libero mollitia odio.
            </p>
            <p className='rev_author'>- Joel Raj {`(customer review)`}</p>

        </div>
        <div style={{textAlign:"center"}}>
            <span className="dot"></span> 
            <span className="dot"></span> 
            <span className="dot"></span> 
        </div>
    </div>
  )
}

export default CustomerReview