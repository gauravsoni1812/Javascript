// closure example 2

function hello(x){
     const a="varA";
     const b="varB";
     return function(){
         console.log(a, b,x);
     }
}

const ans=hello("gaurav");

ans();

// here the output will be varA ,varB and gaurav
// in FEC in the arguments we have the x and inside it we have a and b so if it will return the function it will have both X a and B