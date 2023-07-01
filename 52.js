// sort method

// this is the syntax of writting the Code
// if you dont write that than it will consider them as a strings and and then sort in lexicographicall order by comparing just by first letter
const numbers=[1,2,3,500,600,800];
numbers.sort((a,b)=>{
     return a-b;
});
// console.log(numbers);

// from high to low.......
numbers.sort((a,b)=>{
     return b-a;  
})

console.log(numbers);