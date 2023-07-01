const usermethods={
    about: function(){
        return `${this.firstname} is ${this.age} years old`;
    },
    is18: function(){
        return  this.age >= 18;
    }, 
    sing: function(){
        return "toon na na na la la";
    }
}

function createUser(firstname, lastname , email , age, address){
    const user=Object.create(usermethods);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;

    return user;
}

const user1=createUser('gaurav', 'vashisht', 'gauravsoni@88@gmail.com', 15 , "my adress");

const user2=createUser('Harshit', 'vashisht', 'harshit@88@gmail.com', 18 , "gopalanj");

const user3 =createUser('Harshit', 'vashisht', 'harshit@88@gmail.com', 18 , "gopalanj");
console.log(user1);// user1 ke proto mai jo methods hai vo 
// set hojaengi  at line no 14 user ke sare methods proto 
// mai set hojaenge  esko bolte hain proto chaining

//So proto refrence hai objects ka

console.log(user1.about());// so at this line vo user1 object
// mai gaya or usne dekha ki wahan par hai ya nahi hai 
// about if ni dikhega to proto mai jkakr dekhega vo
// Now ab tumhe jitni bhi methods banani ho unsab mai 
// sirf ek line se call hojaega

// console.log(user3.sing());

// This is Known as establishing the relationship between the protos
