// filter method
// As the name suggests it will you to filter out things

const numbers=[1,2,3,4,5,6,7,8,8 ];

const isEven=(numbers)=>{
   return numbers%2===0;
}

const evenNumbers=numbers.filter(isEven);
// ye function bhi new array banaega but ye array filtered
// array rhega joki sirf un elements ko return karega joki
// true return karenge
// console.log(evenNumbers);  
console.log(isEven());