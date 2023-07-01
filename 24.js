const mainbutton=document.querySelector("button"); 
const body= document.body;

function randomcolorGenerator(){
    const red=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const randomColor = `rgb(${red}, ${green} ,${blue})`;
    return randomColor; 
}

mainbutton.addEventListener("click",()=>{
     const randomcolor=randomcolor();
     body.style.backgroundColor=randomcolor;

})