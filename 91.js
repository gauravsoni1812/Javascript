// closures 
// So the basic meaning of closures is whenever the function
// return the function that function takes the value of 
// their localvariables with itself this is called as closures
// lemme explain
// Closures example 1 lets analyse this code

function printFullName(firstname, lastname){
    function printName(){
        console.log(firstname,lastname);
    }
    return printName;
}

const ans=printFullName("Gaurav","Soni");

ans(); 

// Now javasript uses a callstack jisme we have the 
// execution context that we want
// so in the callstack we have GEC first  
// at the line no 15th when the ans function gets called
// at that time function execution context is called  
// lets see that in FEC in arguments we have fnama , lname
// and we have function called printname
// and then by the time of execution when the ans function 
// is called it will return the function
// function printName(){
//     console.log(firstname,lastname);
// }
//but now from where did you get this variables fname and 
// lname at and thats what do we call the closures 
// closures jisme ham un local varaibles ki value ko 
// dhoondkar apne sath return karte hain 
// So in ans we have the function fullname, lastname as well
