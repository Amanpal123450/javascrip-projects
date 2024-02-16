base_url ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const dropdown =document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const formcurr = document.querySelector(".form select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".MSG");


for(let select of dropdown)
{
    for(currcode in countryList){
        let newOption =document.createElement("option");
        newOption.innerText =currcode;
        newOption.value =currcode;
        
        if(select.name ==="form" && currcode === "USD")
        {
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currcode ==="INR")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);

    }
    select.addEventListener("change",(evt)=>{
             updateflag(evt.target);
    });
}
const updateflag =(element)=>{
      
    let currcode =element.value;
    let countrycode = countryList[currcode];
    let newsrc =`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img  = element.parentElement.querySelector("img");
    img.src=newsrc;
};

btn .addEventListener("click",async(evt)=>{
       evt.preventDefault();
    let amount  = document.querySelector(".amount input");
    let amtvalue  = amount.value;
     if(amtvalue=== "" || amtvalue <1 )
     {
        amtvalue= 1;
        amount.value = "1";
     }

     const url =`${base_url}/${formcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
     let response =await fetch(url);
       let data = await response.json();
         let reta =data[tocurr.value.toLowerCase()];
         console.log(amtvalue);
         console.log(reta);
    let finalamount=amtvalue * reta;
    
    msg.innerText=`${amtvalue}${formcurr.value}=${finalamount}${tocurr.value}`
    

});