// lexical environment and scope chain 

const lastName="soni";

const printName=function(){
    const firstname="gaurav";
    function myFunction(){
        console.log(firstname);
        console.log(lastname); 
    }
}

printName()  ;
// Now sabse pehle again lastname=unninit ,printname=uninit
// jaise hi printname call hoga waise hi function execution 
// context mai jakr firstname= uninit then khatam 
// Now jab execute hoga lastname = soni 
// then function mai jakr firstname = gaurav
// jab lastname ki bari aegi tab vo apne function mai 
// dekhega fir uske bahar bhi dekhega global scope mai