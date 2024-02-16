let btn =document.querySelector(".btn");

function getotp()
{
    let getotp =Math.floor(1000+Math.random()*9000);
    console.log(getotp);

    window.localStorage.setItem("otp",getotp);
}

getotp();

function validateOTP()
{
let validOpt =document.querySelector(".validOtp").value;
let otp =window.localStorage.getItem("otp");
if(validOpt===otp)
{
    alert('valid OTp');

} 
else
{
    alert('invalid otp');
}
}




