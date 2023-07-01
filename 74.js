//Prototypes

function hello(){
    console.log("Hello world"); 
}

// const hello =["value"];  // esme prototype ni milega

// Now javascript functions can works as a functions as well 
// objects 
// javascript function ===> function + object 

// console.log(hello.name);
// Now the thing is you can add your own property to the
// function 
// hello.myOwnproperty = "very unique value";
// console.log(hello.myOwnproperty);

// name property --> tells about the name of the function
// function provides more usefull properties like call, 
// blind, apply 
// function provides more usefull properties

//function provide us free space which is object which is
//prototype ye sirf ek khali object hai jo use karne ke lie
// derakha hai eslie taki agr hame ek function se lekar koi
// key value pair add karna pad jae to ham karde

// console.log(hello.prototype);
// only functions provide prototypes prooerties

// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing=function(){
    return "lalalal";
}
console.log(hello.prototype.sing());