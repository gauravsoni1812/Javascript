// Array destructuring

//  If you want to pickup elements from
// the array and store it into the variable array destructing can help 
// you with that

const arr=["apple", "bannana","mango"];

// let var1=arr[0];
// let var2=arr[1]; 
// console.log("the value of var1 is", var1);
// console.log("the value of var2 is", var2);

let [var1 ,var2, var3]=arr;
console.log("the value of var1 is", var1);
console.log("the value of var2 is", var2);
console.log("the value of var3 is", var3);

// Now lets consider ki you have to make store all the items in the new array of the previous array

let [...myNewArray]=arr;

console.log(arr);