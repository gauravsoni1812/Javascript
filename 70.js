// improving our code
const usermethods={
    about: function(){
        return `${this.firstname} is ${this.age} years old`;
    },
    is18: function(){
         return  this.age >= 18;
    }
}

function createUser(firstname, lastname , email , age, address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=usermethods.about;
    user.is18=usermethods.is18;
    return user;
}

const user1=createUser('gaurav', 'vashisht', 'gauravsoni@88@gmail.com', 15 , "my adress");

const user2=createUser('Harshit', 'vashisht', 'harshit@88@gmail.com', 18 , "gopalanj");

const user3 =createUser('Harshit', 'vashisht', 'harshit@88@gmail.com', 18 , "gopalanj");

// Now both the methods that you are seeing in the
// createuser function if you create the million user you have to create a million funciton too
//that is something that i dont want iwant to create one 
// function that is accessed by any user that i want to

console.log(user1.about());
console.log(user2.about());