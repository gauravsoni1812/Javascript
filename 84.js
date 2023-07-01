// How Javascript works
// code execution 

// why compilation

// How javascript code executes

// Sabse pehle code complile hoga then execute hoga    

// complation 
// --> tokenising/lexing  = es method mai hamare code ko chote chote chunks mai tod dete hai unhe kehte hain token 
// -->parsing = ye method en chote chunks ki help se abstract syntax tree bananate hain 
// -->Code generation = ekse baad hjamara code generate hota hai
//Why to complile?
// --> Early error checking (syntax error) sath mai determining  appropriate scope for variables so to do this you have to complile the code

console.log(this);
console.log(window);
console.log(firstname);  
var firstname="Gaurav";
console.log(firstname);
// now if you make any variable outside the funciton
// inside the window it consider that variable as a global variable

//Now Code execution phase 
// In javascipt the code execute in the code execution 
// context called global execution context

//--> Global execution context 2 phases mai banta hai


//-->1 creation phase : here firstname naam ka variable jo hai global scope ko belong karta hai jab firstname naam ka 
// variable hai hai vo global ecexution context mai 
// undefined ban jaega var ke case mai 
// this ki value window hojati hai but node js mai diffrent 
// rehti hai
// window bohot sare functions ko rakhti hai 
// javascript khud ek syncronous programming language hai
// mean while executing ek ek karke line execute hoti hai 
// mean single threaded matlab jab tak ek line execute ni hojtati vo dusri mai jaegi ni


//-->2 Code execution phase 
// ab ham apne upar vale code ko ek ek karke line bu line dekhte hain 
// sabse pehle this likha hua hai to this mai window object pada hua rehta hai as above dekha hai 
// then window firse print hoga kuki window to window hai hi na 
// then hamara undefined print hoga kuki sabse pehle jab variable bante hai to vo global execution context mai unka 
// value undefined rehta hai 
// then uske baad vali line mai vo undefined se alag hokar 
// gaurav ban jaega as dia hua hai 
