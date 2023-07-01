// How to iterate over the elements
// Now if i want to color green to all the achor tag elements
// then we have to apply loops and iteration 

// get multiple elements bu using getElementsbyclassname
// get multiple elements by using queryselectorAll
// const navItems=document.getElementsByTagName("a");

// for(let i=0;i<navItems.length;i++){
//     const navItem= navItems[i];
//    navItem.style.backgroundColor="pink";
//    navItem.style.color="black";  
 
// }



// simple for loop
// for of loop 
// for each loop is haram in html 

// console.log(navItems[2]);

// const navItems=document.querySelectorAll(".nav-item");

let navItems=document.querySelectorAll("a");
// here you have nodelist so that you can use use for,for 
// of for each all  kinds of loops
console.log(navItems);
