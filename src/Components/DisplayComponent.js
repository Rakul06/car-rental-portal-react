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
 
  return (
    <div>
      <UserContextFromDisp.Provider value={{carBookingHome,setCarBookingHome,regDetails,setRegDetails}} >
          <NavigationBar/>
          <Footer/>
      </UserContextFromDisp.Provider>
        
      
    </div>
  )
}


export default DisplayComponent