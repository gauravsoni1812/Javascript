// This keyword
function personInfo(){
    console.log(`person name is ${this.firstname} and person age is ${this.age}`);
}

const person1={
    firstname:"gaurav",
    age:8,
    about:personInfo
}
const person2={
    firstname:"Ashi",
    age:68,
    about:personInfo
}
const person3={
    firstname:"soumya",
    age:55,
    about:personInfo
}

person1.about();
person2.about();
person3.about();


// ye jo this keyword hota hai ye pura object rakhkar baithta 
// hai or jab bhi koi nikalna rehta hai tab this.somthing se nikalte hain