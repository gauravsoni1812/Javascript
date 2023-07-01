// Methods of Arrays

// Array push pop
// Array Shift Unshift

let fruits=["mango","apple","lichi"];

// if You wants to add one more fruit than we have push like a stack

fruits.push("banana"); //ye method array ko change karparha hai but aisa primitive ds ke case mai ni hota like strings
// in the same way as push back in the vectors
console.log(fruits); 

// for remove the elements we have pop operation

console.log(fruits.pop());  // You can actuaally Store the last one element

console.log(fruits);

// unshift is used to add elements in the start of the arrays 

fruits.unshift("pussy");

console.log(fruits);

//Shift shuru ke ellements ko remove karne mai help karega 

console.log(fruits.shift());
console.log(fruits);


// push pop is more faster than shift and unshift