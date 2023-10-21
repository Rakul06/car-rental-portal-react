import React, { useContext, useState } from 'react';
import logo from '../img/logoFinal.gif';
import './NavBarStyle.css';
import Home from './Home';
import Book from './Book';
import { Link,NavLink,BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Contact from './Contact';
import BookingForm from './BookingForm';
import RegisterPage from './RegisterPage';
import {UserContextFromDisp} from '../Components/DisplayComponent'

const NavigationBar = () => {
    const {setCarBookingHome}= useContext(UserContextFromDisp);
    const [show,setShow]=useState(true);
    const [userName,setUserName]=useState("");
    let userNameCopy="";
    return (
        <BrowserRouter>
                <nav>
                    {
                        show?<div className='Nav-Bar'>
                        
                        <div>
                            <img src={logo} alt="" />
                        </div>

                        <div>
                            {userName!==""?<p>{"Welcome "+userName+" !!!"}</p>:<p></p>}
                        </div>
                        
                        <div className='Nav-Link'>
                            <NavLink onClick={()=>setShow(true)}to="/">Home</NavLink>
                            <NavLink onClick={()=>setShow(true)}to="/Models">Car Models</NavLink>
                            <NavLink onClick={()=>setShow(true)} to="/Contact">Contact</NavLink>
                            {userName===""?<NavLink onClick={()=>setShow(!show)} to="Login">Login</NavLink>:<Link onClick={()=>{
                                setShow(true);
                                setUserName("");
                                setCarBookingHome((obj)=>{
                                    return ({...obj,login:false,carType:"",
                                        location:"",
                                        pickup:"",
                                        drop:"",})
                                })

                            }
                            } to="">Logout</Link>
                            }
                        </div>
                        
                    </div>:null
                    
                    }

                </nav>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Models' element={<Book/>}></Route>
                    <Route path='/Login' element={<Login                        
                        showNav={show} setShowNav={setShow}
                        userName={userName} setUserName={setUserName}
                        
                    />}>
                    </Route>
                    <Route path='/Contact' element={<Contact/>}></Route>
                    <Route path='/Bookcar' element={<BookingForm/>}></Route>
                    <Route path='/Login/Register' element={<RegisterPage/>}></Route>
                   
                </Routes>

        </BrowserRouter>
    
    )
}

export default NavigationBar
