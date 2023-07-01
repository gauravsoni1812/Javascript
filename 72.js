const obj1={
    key1:"value1",
    key2:"value2"
}

// __proto__

//official ecmascript documentation

// [[prototype]]


// const obj2={
//     key3:"value",
// }

// Now i want ki whenever i type console.log(obj2.key1) 
// I want ki ki vo obj2 mai dekhe uske bad object 1 mai jakr 
// Dekehe ki key1 mili hai ya ni so to di that we have 
// Something called Object.create

const obj2 = Object.create(obj1); //{} // now jo bhi object 
//tumne dala hai
obj2.key3="value3";
// obj2.key1="unique";

// console.log(obj2.key1);
// at this point you can clearly see that it is printing 
// value2 but why so
// so lets print obj2
console.log(obj2);

// So thats how javascript ko object2 se ni mil rhi thi vo usne obj2 se manga lia 
