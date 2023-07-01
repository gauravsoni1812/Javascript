// find method
//ye method aisi hai ki pure array mai traverse karegi or 
//sirf unhi ko return karegi joki true hone wale first 
//occurence ko hi return karegi bakiyon ko reject kardegi
//for example esme usne dog ko return kia hai

// const myArr= ["gaurav" , "soumya", "mummy" , "ans", "dog"];

 
// const ans= myArr.find((string)=>{
//     return string.length===3;
// }); 

// console.log(ans); 

const users=[
   {userId:1 , userName:"Gaurav"},
   {userId:2 , userName:"Kartik"},
   {userId:3 , userName:"Shobbit"},
   {userId:4 , userName:"Nigga"},
   {userId:5 , userName:"Niharika"},
];

const Myuser =users.find((user)=>{
     return user.userId===3
});

console.log(Myuser);