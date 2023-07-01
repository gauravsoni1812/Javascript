//for loops and while loops in arrays 

//for of loop in arrays 
// Use const for creating arrays


// Now if you wants to push any elements inside the arrays made using const you can it dosent mean that array is changed because the array is stored as a pointer of the 0th element 
// Which is same after the push and pop operation 
// but if you try to change the complete array than thats  problem
//  fruits=["pinnapple","guava"];   This Will Give you the error

// console.log(fruits);

// fruits.push("pussy");
// console.log(fruits);

const fruits= ["apple", "mango" , "lichi"];

// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }     
