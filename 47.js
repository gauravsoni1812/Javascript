//function returning function
//in javascript you can return the function in a particular
//function call


function myFunc(){
    function hello(){
        return "hello world";
    }
    return hello;
}

const ans=myFunc(); // at this point ans bhi function ban jaega
console.log(ans());