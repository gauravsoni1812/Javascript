// Callback Functions
// In the callback functions
// we are actually passing a whole function as an argument
// and when we call the function we name the aergument by callback Now we can use the callback as a function

// kisi bhi function ko input lena or fir usko callback karna thats a callback function 

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function mufunc(callback){
     console.log("hello there Iam a func and I can..");
     callback("harshit");
}

myFunc(myFunc2); 