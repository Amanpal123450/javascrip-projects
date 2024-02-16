let hour =document.querySelector(".hours");
let minit =document.querySelector(".minit");
let secnd = document.querySelector(".secnd");


setInterval(()=>{
    currentTime = new Date();

    hour.innerText =currentTime.getHours();
 minit.innerText = currentTime.getMinutes(); 
 secnd.innerText=currentTime.getSeconds();                                            

},1000)

 