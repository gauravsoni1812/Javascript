// Event bubbling/Event propogation
console.log("hello world")

const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

//capturing events
child.addEventListener("click",()=>{
    console.log("captured child");
},true)
parent.addEventListener("click",()=>{
    console.log("captured parent");
},true)
grandparent.addEventListener("click",()=>{
    console.log("captured grandparent");
},true)
document.body.addEventListener("click",()=>{
    console.log("captured body");
},true)



child.addEventListener("click",()=>{
    console.log("you clicked on child");
})
parent.addEventListener("click",()=>{
    console.log("you clicked on parent");
})
grandparent.addEventListener("click",()=>{
    console.log("you clicked on grandparent");
})
document.body.addEventListener("click",()=>{
    console.log("you clicked on body");
})
// Now hota ye hai ki if child mai koi click event laga hua
// hai or if tumne click kia hai to vo check karega ki 
// parent mai bhi koi click event wagera hai ya nahi
// if child par click karoge then parent then grandparent
// then body mai check hoga this is called as event bubbling 




// Capturing
// Now if i click on the child 
// the output goes like 
// captured body then grandparent then parent then child 
// then you clicked on child then parent then grandparent .
// then body capturing is basicaly opposite of bubbling