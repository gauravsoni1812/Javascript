// closure example 3
// Our aim is to make the cube function which takes the 
// number and return the cube of it
// lets analyse this
function myfunction(power){
    return function(number){
         return number**power;
    }
}


const cube = myfunction(3);
const ans =cube(2);

console.log(ans);