// Select element by query selector

const mainheading=document.querySelector("#main-heading");
const header=document.querySelector(".header")
// console.log(mainheading);
// const navItem=document.querySelector(".nav-item");
// console.log(header);
// console.log(navItem);  // Now yahan par tumhe first wala
// navitem milega baki sab ko ignore kardega its like 
// first cum first serve Now to select all the items you
// have to use document.queryselectorAll();

const navItem = document.querySelectorAll(".nav-item");
console.log(navItem); 