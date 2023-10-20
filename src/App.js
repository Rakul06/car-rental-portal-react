import React from 'react';
import DisplayComponent from './Components/DisplayComponent';
import { useEffect, useState,createContext } from 'react'
import axios from 'axios';

export const UserContextFromApp = createContext(null)

export const fecthDetails = async(url,setFn) =>
    {
      try{
        const {data} = await axios.get(url);
        setFn(data);
      }
      catch(error){
        console.log(error.message);
      }
        
    }

function App() {

  const [carDetails,setCarDetails]=useState([]);
    const [dummyData,setDummyData]=useState([]);
  
  useEffect(()=>
    {
        fecthDetails("https://jsonplaceholder.typicode.com/comments",setDummyData);
      fecthDetails("https://testdata-9o57.onrender.com/carDetails",setCarDetails); 
    },[])

  return (
    <>
    <UserContextFromApp.Provider value={{carDetails,setCarDetails}} >
        <DisplayComponent  carDetails={carDetails}/> 
    </UserContextFromApp.Provider>
      
    </>
  );
}

export default App;
