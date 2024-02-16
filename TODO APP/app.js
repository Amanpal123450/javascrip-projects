let inputs =document.querySelector("#inp");
let text=document.querySelector(".text");

function add(){

    if(inputs.value=== "")
    {
        alert("please enter the task");
    }
    else
    {
        let newelement=document.createElement("ul");
       newelement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        console.log(newelement);
        text.appendChild(newelement);
        inputs.value="";

        newelement.querySelector("i");

        newelement.addEventListener("click",()=>{
                     
            newelement.remove();
        });
      

        
        
}
}