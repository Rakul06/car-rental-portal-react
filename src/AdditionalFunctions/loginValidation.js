export const loginValidation=(userDetails,setError,regUsers,setLoginTF,loginTF,setShowNav,setCarBookingHome,setUserName,navigate)=>{

    let invalid=document.getElementById("invalid");
    
    
    let filterFromJson=regUsers.filter((obj)=>(
        userDetails.userName===obj.email
    ))

    

    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
    if(userDetails.userName.trim().length < 1){
        setError((obj)=> {return{...obj,mailError:"user email cannot be empty..."}})
        setLoginTF((obj)=>{return{...obj,mailErrorTF:false}})
    }
    else if(!(regex.test(userDetails.userName.trim()))){
        setError((obj)=> {return{...obj,mailError:"invalid email..."}})
        setLoginTF((obj)=>{return{...obj,mailErrorTF:false}})
    }
    else{
        if(regUsers.length > 0){
            console.log("working from regg")
            setError((obj)=> {return{...obj,mailError:""}})
            if(filterFromJson.length > 0){
                invalid.innerHTML="";
                setLoginTF((obj)=>{return{...obj,mailErrorTF:true}})
            }
            else{
                
                invalid.innerHTML="No data found invalid login credentials...";
                setLoginTF((obj)=>{return{...obj,mailErrorTF:false}})
                
            }
        }
        else{
            setError((obj)=> {return{...obj,mailError:""}})
            setLoginTF((obj)=>{return{...obj,mailErrorTF:true}})
        }
           
    }

    if(userDetails.passWord.trim().length < 1){
        setError((obj)=> {return{...obj,passError:"password cannot be empty..."}})
        setLoginTF((obj)=>{return{...obj,passErrorTF:false}})
    }
    else{
        setError((obj)=> {return{...obj,passError:""}})
        if(filterFromJson.length > 0 && regUsers.length > 0){
            if((filterFromJson[0].password)===(userDetails.passWord)){
                setLoginTF((obj)=>{return{...obj,passErrorTF:true}})
                setError((obj)=> {return{...obj,passError:""}})
            }
            else{
                setLoginTF((obj)=>{return{...obj,passErrorTF:false}})
                setError((obj)=> {return{...obj,passError:"incorrect password..."}})
            }
        }
        else{
            setLoginTF((obj)=>{return{...obj,passErrorTF:true}})
            setError((obj)=> {return{...obj,passError:""}})
        }
    }

    if(loginTF.passErrorTF && loginTF.mailErrorTF){
        alert("Login Sucessfull !!!!")
        navigate("/");
        setShowNav(true);
        setCarBookingHome((obj)=>{
            return({...obj,login:true})
        });
        let text = userDetails.userName;
        const myArray = text.split("@");
        regUsers.length > 0 ? setUserName(filterFromJson[0].name): setUserName(myArray[0])
    }
    else{
        console.log("failed")
    }
     
}
