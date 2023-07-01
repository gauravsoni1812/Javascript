// primitive vs refrence data types

let num1=23;
let num2=num1;

console.log("value of num1 is" , num1);
console.log("value of num2 is" , num2);

num1=45;

console.log("value of num1 is" , num1);
console.log("value of num2 is" , num2);

let array1=["item1" , "item2"];
let array2=array1;

console.log(array1);
console.log(array2);

array1.push("item3");

console.log(array1);
console.log(array2);

// this is a concept of stack memory and the heap memory 
// All the primitive data types are stored in the stack memory but the refrence data types are stored under the 
// heap memory specially in array when you assigned the 
//value of array2 to array1 you actually give the address of array1 to array to so if you Make changes to array1 
// array2 will access to the pointers and then 