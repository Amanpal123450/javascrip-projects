text = document.querySelector("h1");
btn =document.querySelector(".change");
let userscor1 = document.querySelector(".user");
let compscor1 = document.querySelector(".compu");
let winner =document.querySelector(".winner");
let user_count =0;
 let comp_count =0;
 winner.classList.remove("winner");
arr5=["1","2"];

const random = () =>{
     
   let choice=prompt("enter the number");

   return choice;
}

const comouter = () =>{
      
    let randchoice=Math.floor(Math.random()*2);
   
    // console.log(arr5[randchoice]);

    return arr5[randchoice];
}



    btn.addEventListener("click",()=>{


        

        let user=random();
        let comp=comouter();

        console.log(user);
        console.log(comp);

        if(user===comp)
        {
            text.innerText = "WIN";
            text.style.backgroundColor="green"
            user_count++;
            usersecora();
        }
        else if(user ===""){

            text.innerText = "PLESA ENTER THE NUMBER ";
            text.style.backgroundColor="red";

        }
        else
        {
            text.innerText="LOWSE";
            text.style.backgroundColor="red";
            comp_count++;
            compscora();
        }    
        
        
    });
    const usersecora=()=>{
        userscor1.innerText =user_count;
        winner.innerText ="USER WINNER";
       
        
        winner.classList.add("winner");
    }
    const compscora =()=>{
               compscor1.innerText=comp_count;
               winner.innerText ="COMPUTER WINNER";
               
        
        winner.classList.add("winner");
    }
    
       




