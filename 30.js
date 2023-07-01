// dot notation vs bracket notation 

// person={
//     name:"gaurav",
//     age:21,
//     hobbies :["guitar","gym","boxing"]
// }
// console.log(person);

// person.gender ="male";
// console.log(person);

//How to add key value pairs by the bracket Notation 

// person["gender"]="male";

// console.log(person.gender);

//Now if i want to make a key which is like person hobbbies
//i.e we have spaces then we use the bracket Notation
const key="email";
const per={
    name:"gaurav",
    "lovely parts":"mechanical keyboard",
    age:21,
}
console.log(per["lovely parts"]);
per[key]="gauravsoni8800@gmail.com";

console.log(per);