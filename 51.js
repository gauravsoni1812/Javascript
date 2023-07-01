// reduce
const numbers=[1,2,3,4,5,10];

// aim:sum of all the numbers in the array
 

numbers.reduce((accumulator, currentValue)=>{
     return accumulator+currentValue;
} ,100);// 100 is the initial value of accumulator

// accumulator , currentValue , return
// 1             2             3 
// 3             3             6
// 6             4             10
// 10            5             15
// 15            10            25

const usercart=[
    {product :1,productName:"mobile", price:12000},
    {product :2,productName:"laptop", price:12000},
    {product :3,productName:"tv", price:12000},
    {product :4,productName:"macbook", price:12000},
]
 
const totalAmount= usercart.reduce((totalPrice,currentProduct)=>{
  return totalPrice+currentProduct.price;
},0)

console.log(totalAmount);

// total price      CurrentValue       return
//  0                  {}               1200
