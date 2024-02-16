let userscore =0;
let compscore =0;

const choices =document.querySelectorAll(".choice");
let text =document.querySelector(".h2");
let img_computre=document.querySelector(".computre");
let img_user=document.querySelector(".user");
let usercount=document.querySelector(".usercount");
let computrecount=document.querySelector(".computrecount");
img_computre.classList.remove("stylecoputer");
img_user.classList.remove("styleuser");

let ti=2000;

arr=["rock","paper","scissors"];
  choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      
      let  userchoice=choice.getAttribute("id");
        
      styleuserComp();
      setTimeout(()=>{

      
      img_user.src=`img${userchoice}.png`;
      let computerchoice=Math.floor(Math.random()*3);
      let compu_Choice=arr[computerchoice];

      img_computre.src= `img${compu_Choice}.png`;

      console.log("user=",userchoice);
      console.log("computer=",compu_Choice);

      playgame(userchoice,compu_Choice);
      
    },`${ti}`)
    ti=0;
    });

  });

  const playgame=(userchoice,compu_Choice)=>{
      
    if(userchoice===compu_Choice)
    {
            let y=text.innerText="GAME DRAW";
            let speech =new SpeechSynthesisUtterance();
       speech.text =y;
       window.speechSynthesis.speak(speech);
    }
    else 
    {
        
      let userwin =true;
       
      if(userchoice === "rock")
      {
         userwin=compu_Choice==="paper" ? false: true; 
      }
       else if (userchoice === "paper")
      {
          userwin=compu_Choice==="scissors" ? false : true;
      }
      else if(userchoice==="scissors")
      {
        userwin=compu_Choice==="rock"?false:true;
      }
        
      shouawinner(userwin,compu_Choice,userchoice);
      
    }
  };

  const shouawinner=(userwin,compu_Choice,userchoice)=>{
     if(userwin)
     {
       let newtext=text.innerText =` USER WIN !! ${userchoice}  BEAT TO  ${compu_Choice}`;
       text.classList.add("styleuser1");
       text.classList.remove("stylecom1");
       userscore++;
       usercount.innerText=userscore;
       let speech =new SpeechSynthesisUtterance();
       speech.text =newtext;
       window.speechSynthesis.speak(speech);
     }
     else if(userscore===10)
     {
         let l= text.innerText="GAME OVER FINAL WINNER USER";
         let speech =new SpeechSynthesisUtterance();
       speech.text =l;
       window.speechSynthesis.speak(speech);
     }
     else if(compscore===10)
     {
     let p= text.innerText="GAME OVER FINAL WINNER COMPUTRE";
     let speech =new SpeechSynthesisUtterance();
       speech.text =p;
       window.speechSynthesis.speak(speech);
     }
     else
     {
     let o= text.innerText =`COMPUTRE WIN !!${compu_Choice}  BEAT TO  ${userchoice}`;
      text.classList.add("stylecom1");
      text.classList.remove("styleuser1");
      compscore++;
      computrecount.innerText=compscore;
      let speech =new SpeechSynthesisUtterance();
       speech.text =o;
       window.speechSynthesis.speak(speech);
      
     }
     
  }

  const styleuserComp=()=>{

        img_user.classList.add("styleuser");
        img_computre.classList.add("stylecoputer");
        
  }
  const hello=()=>{
    clearTimeout()
  }