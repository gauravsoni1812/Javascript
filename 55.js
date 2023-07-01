//just opposite of every method
//yahan ek bhi even number milega jo true return kardega uske baad ye bhi true return karega

const numbers=[3,5,1,9,7];

const ans=numbers.some((number)=>number%2===0);

console.log(ans);