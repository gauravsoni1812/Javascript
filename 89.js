// function execution context 

// function execution context

let foo="gaurav";
console.log(foo);
function getfullname(firstname,lastname){
     console.log(arguments);
     let myVar="var inside function";
     console.log(myVar);
     const fullname =firstname+" "+lastname;
     return fullname;
}

const personName=getfullname("gaurav","soni");
console.log(personName);

// edhar in the global memory we have 
// foo = uninitialized ,window , this=window ,personname=uninitialized 
// Now line by line code ko dekhte hain
// code execution se pehle
// foo = uninitialized ,window , this=window
// jaise hi function call hota hai hamare paas 
// function execution context banjata hai 
// jahan par sare arguments initialize hojate hain
// jo let mai hoga vo uninitialize hota hai andar wale
// undefined hojata hai  and then jab hamara code execute 
// hota hai line by line then values set hoti hai or milti 
// hain es tarah se function execution context banta hai as 
// a local execution context