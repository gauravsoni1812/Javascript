// Hoisting
// if you make your function like function hello{
    // console.log("shobbit sahu"); 
// }
//you can actually call the function before making it
// this will work fine;

hello();

function hello(){
    console.log("hello world");
}

// This will not work
// const hello=()=>{
//   console.log("Hello World");
// }

// this is called as hoisting