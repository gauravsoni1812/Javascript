// parameter destructuring

//object
//react

const person={
    firstname:"gaurav",
    gender:"male",
    age:21,
}

// function printDetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

// this is known as parameter destructuring
function printDetails({firstname, gender}){
  console.log(firstname);
  console.log(gender);
}

printDetails(person);