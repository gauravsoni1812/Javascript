// Event Object
// const firstbutton=document.querySelector("#one");

// // firstbutton.addEventListener("click",function(event){
// //      console.log(event);
// // })

// jab bhi mai kisi bhi element par event listner add hoga
// js engine----line by line execute karta hai 
// browser-----js engine + extra features
// browser------js engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen karrhe hai 
// browser yahan par do kaam karega 
//  1.) jo callback function hai vo js engine ko dedega
//  2.) callback function ke sath browser jo event hua hai uski information bhi dega 
// ye info hame ek object ke form mai milegi 
// jab ham callback function banaenge tab ham uske argument mai jo paas karenge jo ki event in above example 
  
const allButtons= document.querySelectorAll("button");


for(let i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener("click",(event)=>{
     console.log(event);
    })
}