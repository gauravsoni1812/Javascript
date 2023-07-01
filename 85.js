console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);
function myFunction(){
    console.log("this is my function");
}

var firstname="gaurav";
var lastname="soni";
var fullName=firstname1+" "+lastname;
console.log(fullName);

// Lets analyse this code
// In the global Scope we have firstname,  lastname , fullname and we have myfuntion 
// Ab hamara global execution context add hoga 
// Now Global execution context stack mai add hota hai
// Here we have two things global memory and executuon phase
// in global memory we have window , this, fname ,lname and fullname = undefined 
// myfuction bhi add hojaega ye sab kuch pehli line execute hone se pehle global memory mai ajaega
// 1st line window print 
// 2nd line window print 
// 3rd line ho hai vo ye dekhegi ki global memory mai 
// function hai ya ni Now javascript pure ke pure function 
// ko as is is print kardega because we are not calling a function we just want to print our function 
// 4th line undefined aega 
// Now 5th or 6th line mai values set hongi 