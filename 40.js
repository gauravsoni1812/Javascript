// functions inside the functions

const app=()=>{
     const myfunc= ()=>{
        console.log("Hello from my Func");
     }
     const addTwo=(num1,num2)=>{
        return num1+num2;
     }
     const mul=(num1,num2)=>num1*num2;
      
     console.log("inside app");
     myfunc();
     console.log(addTwo(2,6));
     console.log(mul(2,4)); 
}

app();