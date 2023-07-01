// How to clone array 

// How to  concatenate two arrays


let array1=["item1", "item2"];
//Now i want to make array2 like array1 such that array1 se array2 mai koi fark na pade
// let array2 = array1.slice(0).concat(["item3","item4"]);

// let array2 = [].concat(array1,["item3","item4"]);
let array2= [...array1];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);
