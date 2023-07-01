// const user={
//     firstname:"gaurav",
//     lastname:"Soni",
//     email:"gauravsoni8800@gmail.com",
//     age:2,
//     address:"House Number, Colony,Pincode, state",
//     about:function(){
//         return `${this.firstname} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age >= 18;
//     }
// }

// const aboutUser = user.about();
// console.log(aboutUser);

// Now if i want to make a millions of user like that
// So for that we make a function which takes input
// like a firstname ,lastname, email, age

//function(that function create object)
// 2.) add key value pair
// 3.) objects ko return karega

function createUser(firstname, lastname , email , age, address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about= function(){
        return `${this.firstname} is ${this.age} years old`;
    };
    user.is18= function(){
         return  this.age >= 18;
    }
    return user;
}

const user1=createUser('gaurav', 'vashisht', 'gauravsoni@88@gmail.com', 15 , "my adress");

// console.log(user1);
// const is18=user1.is18();
// console.log(is18);

