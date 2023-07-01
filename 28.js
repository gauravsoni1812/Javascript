// console.log("hello world")

const grandparent=document.querySelector(".grandparent");
 
// Event deligation
// grandparent.addEventListener("click",()=>{
//     console.log("You clicked something");
// })

// now if i do click on grandparent it shows you clicked 
// something but if you click on child you got the same 
// ans you got by clicking on the grandparent
// Now fayda ye hai ki apko child parent or grandparent
// ke lie alag alag eventlistner add karne ki zaroorat niha


// But now i want only stuff related to child 
// So now We gonna be using event Object

grandparent.addEventListener("click",(e)=>{
    // Here in the event object if you go into the target
    // You got the child if you click on the child
    console.log(e.target);
    // accha yahan text content mai you got child 
    // if you write e.target.textContent
    // parent child 
    // grandparent parent child
    // like this 
})