export const validation = data =>{
    const errors={};
    if(!data.name.trim()){
        errors.name="Username required"
    }else{
        delete errors.name
    }

    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!data.email){
        errors.email="Email required"
    }
    else if(!regEmail.test(data.email)){
    
        errors.email= 'Invalid Email';
    }
    else{
        delete errors.email
    }


    if(!data.password){
        errors.password="password is required"
    }  else if(data.password.length<6){
    
        errors.password= 'password need to be 6 character or more';
    }
    else{
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword="Confirm the password";
    }else if(data.confirmPassword!==data.password){
        errors.confirmPassword="password dose not match";
    }else{
        delete errors.confirmPassword
    }

    if(data.isAccepted){
       delete errors.isAccepted
    }else{
        errors.isAccepted="please accept our regulations"
    }

    return errors;
}
