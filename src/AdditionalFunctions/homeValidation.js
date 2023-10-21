export const homeValidation=(carBookingHome,setHomeErrMssg)=>{

    let selectTF=false,locationTF=false,pickupTF=false,dropTF=false;

    if(carBookingHome.login===true){
        if(carBookingHome.carType===""){
            setHomeErrMssg((obj)=> { return {...obj,select:"please select a car type"}})
        }
        else{
            setHomeErrMssg((obj)=> { return {...obj,select:""}})
            selectTF=true;
        }
        if(carBookingHome.location===""){
            setHomeErrMssg((obj)=> { return {...obj,location:"please enter your location"}})
        }
        else{
            setHomeErrMssg((obj)=> { return {...obj,location:""}})
            locationTF=true;
        }
        if(carBookingHome.pickup===""){
            setHomeErrMssg((obj)=> { return {...obj,pickup:"please enter pickup date"}})
        }
        else{
            setHomeErrMssg((obj)=> { return {...obj,pickup:""}})
            pickupTF=true;
        }
        if(carBookingHome.drop===""){
            setHomeErrMssg((obj)=> { return {...obj,drop:"please enter your date"}})
        }
        else{
            setHomeErrMssg((obj)=> { return {...obj,drop:""}})
            dropTF=true;
        }

        if(selectTF && locationTF && pickupTF && dropTF){
            setHomeErrMssg((obj)=>{
               return{
                    ...obj,
                    select:"",
                    location:"",
                    pickup:"",
                    drop:""
                }
            })
            return true;
        }
        else{
            return false;
        }
    }

}
