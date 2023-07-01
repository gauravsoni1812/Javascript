// call Apply bind
function about(hobby , favmusicians){
console.log(this.firstname, this.age, hobby , favmusicians);     
}
const user1={
    firstname:"Gaurav",
    age:54,
}

const user2={
     firstname:"harshit",
     age:45,
}

//Now i want to call the about function but not for the user1 for the user2

// about.call(user1 ,"guitar" ,"moazrt");
// Now you can do same thing by using apply too
// but the diffrence is ki [] es dabbe 
// ke andar list banakr bhejna
// about.apply(user1,["guitar","bach"]);
const func=about.bind(user2,"guitar","arjit");
// ab bind sai information ko as a funciton mai store karta hai 
func();