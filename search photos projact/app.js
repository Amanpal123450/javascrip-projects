let input =document.querySelector(".search");
let btn = document.querySelector(".btn-1");
let forms = document.querySelector("form");
let photos =document.querySelector(".photos");
let input2 = document.querySelector(".count");
const key ="CnWyyWreYXVaxlSUJGm5xlGkylG4QcBRAcGHYI40go01xQ3YfSOdlmgk"


forms.addEventListener("submit",async(e)=>{

    e.preventDefault();
  
    const search = input.value.trim();
    const setimg =input2.value.trim();
      
    searchphotos(search,setimg);

    
});

 async function searchphotos(search,setimg){
     
    photos.innerHTML="";
    
    let url = `https://api.pexels.com/v1/search?query=${search}&per_page=${setimg}`;

    if(setimg>=80){
          
        alert("maximum size is 80");
    }
    else
    {

        let respo = await fetch(url,{
            method: "GET",
            headers :{
                Accept: "application/json",
                Authorization : key
            }
        });
    
        let data = await respo.json();
        
        console.log(data);
    
        data.photos.forEach( imgdata =>{
           const image=document.createElement("img");
           image.classList.add('jsphoto');
           image.src=imgdata.src.large2x;
           photos.appendChild(image);
        });

    }

    
}