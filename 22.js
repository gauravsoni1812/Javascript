console.log("script start !!!!");
const allButtons=document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
allButtons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    let num=0;
    for(let i=0;i<=100000000;i++){
       num+=i;
    }
   console.log(e.currentTarget.textContent,num);
  })   
})

let outerVar=0;
for(let i=0;i<=100000000;i++){
     outerVar+=i;
}
console.log("value of outer variable is",outerVar);
console.log("script end");

// Now i want to slow this callback function
// Uske lie maine ek for loop bada sa
// browser ke paas js engine hai or webapis rehte hain 
// Now js engine mai callstack hota hai GEC hota hai jisse 
// vo line by line execute hota hai 
// Now js engine mai we have stack jisme we have GEC
// jaise loop chalega vaise hi so ab javascript ye bolega ki 
// mai listen karu Ya for loop wala code run karu
// so ab vo browser se bolta hai ki jaise hi listen ho waise 
// hi meko callback function dedena browser ke paas pehle se 
// hi apis hai to vo ye kaam kardega callback function dene 
// wale so now 5th line se lekar 11th line tak ka code 
// browser dekh lega so ab js outervar wala for loop dekhega
// Now the question is ki jaise ho click hoga sari buttons 
// callstack mai ajaengi nahi btn 1 2 3 line mai lagenge queue mai 



// Now we have eventloop and eventloop loves callstack so vo 
// ye chahta hai ki callstack ke kaam ke beech koi archan na 
// paida ho to pehle callstack mai GEC ka kaam jab khatam hoga tab vo apne btn bhejega
// So pehle line no 15 se line no 18 ka kaam hoga then uske 
// baad btn jaengi jab callstack se pop hojaega tab jakr
// btn 1 then 2 then 3 aisa hoga
// ek baar vedio bhi dekh lena 