//default parameters

// now here maine addTwo function mai sirf 4 paas kia tha but i want b too in my function so i pass b as a default parameter
// this is how you can make use of default parameter
function addTwo(a,b=5){
    if(typeof b==="undefined" || typeof a==="undefined"){
        return 0;
    }            
    return a+b;   
}

console.log(addTwo(4));