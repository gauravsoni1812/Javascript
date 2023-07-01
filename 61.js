//Clone using Object.assign

//memory

const obj={
    key1:"value1",
    key2:"value2",
}

// const obj2=obj;
// obj.key3=value;
//Now at this point key3 both obj mai or obj2 mai add hojaegi
// kuki memory mai ek hi object ko obj or obj2 point karrhe hain
//Now obj2 ek naya operator banana padega
// so for that


// const obj2={...obj};  //this is a one way of clonning

const obj2=Object.assign({}, obj);


console.log(obj);
console.log(obj2);