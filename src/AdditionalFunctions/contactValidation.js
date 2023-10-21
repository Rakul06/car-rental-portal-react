export const contactValidation=(contactData,setContactData,setErrorContactData)=>{

    let fnameTF=false,lnameTF=false,phoneTF=false,emailTF=false,messageTF=false;

    if(contactData.fname.trim().length > 0){
        fnameTF=true;
        setErrorContactData((obj)=>{
            return{
                ...obj,errFName:""
            }
        })
    }
    else{
        fnameTF=false;
        setErrorContactData((obj)=>{
            return{
                ...obj,errFName:"First Name cannot be empty"
            }
        })
    }
    if(contactData.lname.trim().length > 0){
        lnameTF=true;
        setErrorContactData((obj)=>{
            return{
                ...obj,errLName:""
            }
        })
    }
    else{
        lnameTF=false;
        setErrorContactData((obj)=>{
            return{
                ...obj,errLName:"Last Name cannot be empty"
            }
        })
    }
    if(contactData.phone.trim().length > 0){
        phoneTF=true;
        setErrorContactData((obj)=>{
            return{
                ...obj,errPhone:""
            }
        })
    }
    else{
        phoneTF=false;
        setErrorContactData((obj)=>{
            return{
                ...obj,errPhone:"Phone Number cannot be empty"
            }
        })
    }
    if(contactData.email.trim().length > 0){
        emailTF=true;
        setErrorContactData((obj)=>{
            return{
                ...obj,errMail:""
            }
        })
    }
    else{
        emailTF=false;
        setErrorContactData((obj)=>{
            return{
                ...obj,errMail:"Mail cannot be empty"
            }
        })
    }
    if(contactData.message.trim().length > 0){
        messageTF=true;
        setErrorContactData((obj)=>{
            return{
                ...obj,errMessage:""
            }
        })
    }
    else{
        messageTF=false;
        setErrorContactData((obj)=>{
            return{
                ...obj,errMessage:"Message box cannot be empty"
            }
        })
    }

    if(fnameTF && lnameTF && emailTF && messageTF && phoneTF){
        setContactData((obj)=>{
            return{
                fname:"",
                lname:"",
                phone:"",
                email:"",
                message:""
            }
        })
        alert("Message send successfully !!!")
    }
    

}