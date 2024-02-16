let imgbox =document.querySelector("#imgbox");
let qrimg=document.querySelector("#qrimg")
let qrtext =document.querySelector("#qrtext")
 let base ="https:api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
 async function generateQR(){
    
    if(qrtext.value.length >0){  
        
        // const url = `${base}${qrtext.value}`
        // let response = await fetch(url);
        // console.log(response);
        //   await response.json();
        
        
        
    qrimg.src =
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`;


 imgbox.classList.add("show-img");
    }
    else
    {
        qrtext.classList.add("error");

        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000)

    }

}