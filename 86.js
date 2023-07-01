// What is hoisting  
// code ke execute hone se pehle hamae global memory mai 
// sari chezen store horhi hai by creating variables and 
// assigning it to undefined in case of var 
// thats why i can use them before actually allocating or naming this is called as hoisting 
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


// jab sara code execute hojaega then jo stack mai global 
// execution context pada hua hai vo wahan se pop hojaega 
