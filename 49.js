//map method 
// naya arrray banane ke kaam ata hai purana array ko modify
// karke for example ye squarenumber ka array
// return mai naya array deta hai
// const numbers=[1,2,3,4,5];

// // const square = function(number){
// //     return number*number;
// // }  

// const squareNumber=numbers.map((number,index)=>{
//    return  `index:${index}, ${number*number}`;  
// });

// console.log(squareNumber);

const users=[
    {firstname:"gaurav" ,age:45},
    {firstname:"vashisht" ,age:4},
    {firstname:"manali" ,age:41},
    {firstname:"dishita" ,age:48},
] 

const newArr=users.map((users)=>{
    return `${users.firstname} ,${users.age}`;
});

console.log(newArr);