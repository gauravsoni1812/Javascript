function CreateUser(firstname, lastname, email, age, address) {
    // Now Ye user new keyword se ban rha hai
    // so we use this here
    // const this={}; ye new keyword apne ap bana dega
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
    return this;
}

CreateUser.prototype.about = function () {
    return `${this.firstname} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function () {
    return this.age >= 10;
}

CreateUser.prototype.sing = function () {
    return "lalalala";
}
// jo bhi function new lagakr call karna hai uski starting
// apan capital letter se hi karenge

const user1 = new CreateUser('Harshit', 'vahshisht', 'harshit@gmail.com', 5, "labour chowk");

const user2 = new CreateUser('Harshit', 'vahshisht', 'harshit@gmail.com', 5, "labour chowk");

const user3 = new CreateUser('Harshit', 'vahshisht', 'harshit@gmail.cm', 5, "labour chowk");
 
// Now if you apply for in loop and try to explore all the values of keys
// it will give you the keys of the prototypes as well

for(let key in user1){
    //console.log(key)
    if(user1.hasOwnProperty(key)){ 
      console.log(key);     // ye wala loop sirf abhi jo uski property hai usko print karega
    }
}