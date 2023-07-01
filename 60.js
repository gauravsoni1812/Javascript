// Maps b
// Map is an iterable 

// store data in ordererd fashion

//store key value pair(like objects)
//duplicate keys are not allowed 

//diffrence between maps and objects 

//objects can only have string or symbol
//as key

//in maps you can use anything as key
// like array ,number, string
 
// ye jo const person ka object bana hai esko object literals
//bhi bolte hain 
//object literals esme keys hamesha string hi hoti hai 
// kabhi symbol bhi hojati hai
// key -> string
//
// const person={
//     firstname:"harshit",
//     age:12,
//     1:"one",
// }
//How to make a map
// const person=new Map();
// //map ko use karke key kisi bhi type ka rakh sakte hain 
// person.set('firstname','gaurav');
// person.set('age',7);
// person.set(1,'one');
// person.set([1,1,3],'gaurav');
// console.log(person);

// Now How to access key value pair
// for that we have get method
// console.log('firstaname');
// console.log(1);


// Now I want to print all the keys corrosponding to that map
// console.log(person.keys());

// console.log(person);
// for(let key of person.keys()){
//     console.log(Array.isArray(key));
// }

// yahan order guranteed rehta hai 
 
// Thats how you destructure your map
// for(let [key, value] of person){
//     //console.log(Array.isArray(key));
//     console.log(key, value);
// }

// Now i want to add some properties to my object by using the maps How??

const person1={
    id: 1,
    firstname:"gaurav",
}

const person2={
    id: 2,
    firstname:"ashi",
}

const extraInfo =new Map();
extraInfo.set(person1,{age:8, gender:"male"});
extraInfo.set(person1,{age:9, gender:"female"});

console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);


// es  tarah se kia jata hai
