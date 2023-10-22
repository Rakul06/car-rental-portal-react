import NavigationBar from './NavigationBar'
import Footer from './Footer'
import {useState ,createContext} from 'react';


export const UserContextFromDisp = createContext(null)


const DisplayComponent = ({carDetails}) => {


const [carBookingHome,setCarBookingHome]=useState({
  carType:"",
  location:"",
  pickup:"",
  drop:"",
  login:false
});

const [regDetails,setRegDetails]=useState({
  name:"",
  age:"",
  phone:"",
  email:"",
  password:"",
  cpassword:""
})

const [homeErrMssg,setHomeErrMssg]=useState({
  select:"",
  location:"",
  pickup:"",
  drop:""
})

const [contactData,setContactData]=useState({
  fname:"",
  lname:"",
  phone:"",
  email:"",
  message:""
});

const [errorContactData,setErrorContactData]=useState({
  errFName:"",
  errLName:"",
  errPhone:"",
  errMail:"",
  errMessage:""
})
 
  return (
    <div>
      <UserContextFromDisp.Provider value={{carBookingHome,setCarBookingHome,regDetails,setRegDetails,homeErrMssg,setHomeErrMssg,errorContactData,setErrorContactData,contactData,setContactData}} >
          <NavigationBar/>
          <Footer/>
      </UserContextFromDisp.Provider>
        
      
    </div>
  )
}


export default DisplayComponent
