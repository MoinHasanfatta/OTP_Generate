function otpGenerate(){
    let Otp=""
    for(let i=0;i<6;i++){
        Otp+=Math.floor(Math.random()*10)
    }
    document.getElementById('otp').innerHTML=Otp;
}