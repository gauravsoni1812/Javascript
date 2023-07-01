// spread operator

const array1=[1,2,3];
const array2=[7,8,9];

// const newArray=[...array1, ...array2 ,];
// const newArray=[..."112334"];
// It will behave like an array when you put spread opeator with strings
console.log(newArray);

// Spread operator for the objects

const obj1={
 key1:"value1",
 key2:"value2"    
};

const obj2={
    key1:"gaurav", // int this case if you make a same key here than it will overrite that old key1
    key3:"value3",
    key4:"value4",
}

const newObject={...obj1 ,...obj2};
console.log(newObject);

// bad wala pehle wale ko overwrite kardega