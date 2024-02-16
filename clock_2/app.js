let hour =document.querySelector("#hour");
let minit=document.querySelector("#minit");
let second=document.querySelector("#second");

let set_clock=setInterval(()=>{
    let data= new Date();

    let hr= data.getHours();
    let mini=data.getMinutes();
    let sec=data.getSeconds();

    let calc_hr=(hr*30) + (mini/2);
    let calc_mini=(mini*6)+(sec/10);
    let calc_sec=sec*6;

    hour.style.transform=`rotate(${calc_hr}deg)`;
    minit.style.transform=`rotate(${calc_mini}deg)`;
    second.style.transform=`rotate(${calc_sec}deg)`;
},1000);