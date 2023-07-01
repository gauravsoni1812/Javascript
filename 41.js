// Lexical Scope
// yahan pr pehle vo ye dekhega ki konsa myVar ki value inside function mai then bahar then globally and if it founds then vo wahan se use karega this is called lexical Scope
const myVar = "value1";
function myApp(){
   
    function myfunc(){
    //    const myVar="value57";
       console.log("inside myFunc",myVar);  
    } 
    console.log(myVar);
    myfunc();  
}

myApp();