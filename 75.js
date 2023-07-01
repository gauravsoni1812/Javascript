// Now abhi tak apan kya karrhe hain ki alag se object bana
// rhe hai or usko use karrhe hain as a proto mai 
// instead of that ham ek prototype ka estemal karke 
// jo space hame mili hai usi space mai methods ko add 
// karlete hain

// const usermethods={
//     about: function(){
//         return `${this.firstname} is ${this.age} years old`;
//     },
//     is18: function(){
//         return  this.age >= 18;
//     }, 
//     sing: function(){
//         return "toon na na na la la";
//     }
// }

function createUser(firstname, lastname , email , age, address){
    const user=Object.create(createUser.prototype);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;

    return user;
}

createUser.prototype.about=function(){
    return `${this.firstname} is ${this.age} years old`;
};

createUser.prototype.is18=function(){
    return  this.age >= 18;
};

createUser.prototype.sing=function(){
    return "toon na na na la la";
};

const user1=createUser('gaurav', 'vashisht', 'gauravsoni@88@gmail.com', 15 , "my adress");

const user2=createUser('Harshit', 'vashisht', 'harshit@88@gmail.com', 18 , "gopalanj");

const user3 =createUser('Harshit', 'vashisht', 'harshit@88@gmail.com', 18 , "gopalanj");