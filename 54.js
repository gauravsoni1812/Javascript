// every method                 
// every method true tabhi dega jab sare                  
// ke hame true return hoga sare ke sare                 
// members true return karenge                 
// ye tab estemal hota hai jab hame sare elements mai true return karna padta hai                  
// for ex jab hame elements ko sort karna padta hai according to price                 
// const numbers = [2,4,8,6,10];                 
// const ans=numbers.every((number)=>{                 
//     return number%2===0;                 
// })                 
                 
// console.log(ans);                 
const numbers=[1,2,3,4,5,6,4,5];
const ans=numbers.every((number)=>{
    return number%2===0
})    
console.log(ans);
                 
// const usercart=[                 
//     {product :1,productName:"mobile", price:12000},                 
//     {product :2,productName:"laptop", price:12000},                 
//     {product :3,productName:"tv", price:102000},                 
//     {product :4,productName:"macbook", price:12000},                 
// ]                 
                 
// const ans= usercart.every((cartItem)=>{                 
//      return cartItem.price<30000;                 
// })                 
// console.log(ans);                 