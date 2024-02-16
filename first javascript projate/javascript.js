let box=document.querySelectorAll(".box");
let re=document.querySelector(".reset");
let newg =document.querySelector(".new")
let para =document.querySelector(".msg");
let winner1 =document.querySelector(".wineer");
let resetbtn=document.querySelector(".reset")

let trunO = true;

let arr1=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



box.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        console.log("box click");
        if(trunO)
        {
            box1.innerText = "O";
            box1.style.color="black";
            trunO= false;
        }
        else{
            box1.innerText = "X";
            box1.style.color="red";
            trunO = true;
        }
        box1.disabled = true;
        
        checkwineer();
   });

});
const disabledbox=()=>{
    for(let boxdi of box)
    {
      boxdi.disabled=true;
    }
}


const enbledbox=()=>{
      for(let boxdi of box)
      {
        boxdi.disabled= false;
        boxdi.innerText="";
      }
}

const showwinner =(winner)=>{

    para.innerText = `congratulation , winner is ${winner}`;
    winner1.classList.remove("hii");
    disabledbox();
}

const checkwineer =()=>{

    for(let pattent of arr1 )
    {
        let pos1= box[pattent[0]].innerText;
        let pos2= box[pattent[1]].innerText;
        let pos3= box[pattent[2]].innerText;



        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("wineer",pos1);

              showwinner(pos1);
            }
        }
    }
};

let reset =() =>{
 trunO= true;
 enbledbox();
 para.classList.add("hii");
}

resetbtn.addEventListener("click",()=>{
    reset();
})

