// click events on multiple buttons
const allButtons= document.querySelectorAll("button");
console.log(allButtons);
// firstbutton.addEventListener("click", function(){
//     console.log("You clicked me");
// })
// for(let button of allButtons){
//      button.addEventListener("click",function(){// yahan par arrow funciton mat banana ni to this mai window ajaega ye
// nahi aega
//          console.log(this.textContent);  
//      })
// }

for(let i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener("click",function(){
     console.log(this.textContent);
    })
}