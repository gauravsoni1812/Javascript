//object destructuring   

const band={
    bandname:"led zepplin",
    famousSong:"Stairway to heaven",
    year:1993,
};

let{ bandname:var1, famousSong:var2}=band;

console.log(var1,var2);