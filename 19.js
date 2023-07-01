// Intro to events
//  click  
// Now in my webpage i have a button called learn more
// i want ki jab usme koi click ho to
// Event add karne ke 3 tereeke hain 
const btn=document.querySelector(".btn-headline");
// console.log(btn);
// Now i want to see the button in the form of objects so for that i have something called console.dir
// console.dir(btn);
// btn.onclick=function(){
//     console.log("You clicked me !!!!!!!");
// }es tarike ko use nahi karna hai 
// Now we have a method which is addEventListener
// function clickMe(){
//    console.log("You clicked me");    
// }
btn.addEventListener("click",clickMe); //Es line ka matlab hai ki jab bhi click event perform ho clickMe function ko call karna

// es tarah se ap events add karsakte hain
btn.addEventListener("click",function(){
    console.log("You clicked me");    
 }); 