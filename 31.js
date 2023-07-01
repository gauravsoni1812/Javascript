//How to iterate the objects
const person={
    name:"gaurav",
    age:21,
    "person hobbies":["sex","gym", "cigars"],
}

// for in loop  in the objects
// objects.keys
// for(let key in person){ 
//     console.log(person[key]); // edhar agar tum .key likhoge to undefined aega eslie brackets hi likhna 
// }

// for(let auto in person){
//     console.log(`${auto} : ${person[auto]}`);
// }

// arrays ka type object hi ata hai
// Object.keys method
// if you save this Object.keys(person);
// it will give you the array which consists of all the keys of tha arrays

// console.log(Object.keys(person));

// //Now to check if the given data type is the array or not 
// console.log(Array.isArray(Object.keys(person)));
// // this will give true eska matalab Object.keys(person) tumhe array hi return karega


// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }
// // to obtain the value of the key you have to do something like this
