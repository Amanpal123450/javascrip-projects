let btn = document.querySelector(".change");
let user = document.querySelector(".user");
let computer = document.querySelector(".compu");
let h1 = document.querySelector("h1");

let countuser =0;
let countCom =0;

let voices=[];
let arr=[1,2,3,4];
 
btn.addEventListener("click",()=>{
      
    let UserS=ueserchoice();
    console.log(UserS);
    let ComS = computerScore();
    console.log(ComS);


    if(UserS === ComS)
    {
        countuser++;
      user.innerText = countuser;
      Userh1();
    }
    else if(countCom >= 10)
    {
         h1.innerText="GAME OVER";
         btn.innerHTML="";
         let speech = new SpeechSynthesisUtterance();
         speech.text = h1.textContent;
        window.speechSynthesis.speak(speech);
    }
    else
    {
        countCom++;
        computer.innerText =countCom;
        Comuth1();
    }

});


const ueserchoice =()=>{

    let score = Math.floor(Math.random()*4);

    let val=arr[score];

    return val;
}

const computerScore=()=>{

    let secore =Math.floor(Math.random()*4);

    return secore;
}


const Userh1 =()=>{

    h1.innerText ="USER WIN";
    h1.classList.add("hello");
    h1.classList.remove("hello1");
    let speech = new SpeechSynthesisUtterance();
    speech.text = h1.textContent;
   window.speechSynthesis.speak(speech);
}

const Comuth1 = ()=>{

    h1.innerText ="COMPUTER WIN";
    h1.classList.add("hello1");
    h1.classList.remove("hello");

    let speech = new SpeechSynthesisUtterance();
  speech.text = h1.textContent;
 window.speechSynthesis.speak(speech);
}


