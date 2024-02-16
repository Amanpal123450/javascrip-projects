const meme = document.querySelector("#meme");
let text = document.querySelector(".text");
let btn = document.querySelector(".get_meme");
let url ="https://meme-api.com/gimme/";

let subreddits = ["spidermanmemes","sexmemes","sexmemes","sexmemes"];

let  getmeme= async()=>{
     
    let memes= subreddits[Math.floor(Math.random()*subreddits.length)];
    let memes2= await fetch(url+memes)
    let data= await memes2.json();
    meme.src=data.url;
    text.innerText = data.title;
}
btn.addEventListener("click",()=>{
      getmeme();
});
window.addEventListener("load",getmeme);