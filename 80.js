// ES6 mai we have a class keywords jisme ham sare methods or constructors define karsakte hai

class CreateUser {
    constructor() {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstname} is ${this.age} years`;
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return "la la la la";
    }
    funct(a){
        console.log(a);
    } 
}

const user1=new CreateUser('Harshit','vahshisht' , 'harshit@gmail.com', 5, "labour chowk");

const user2=new CreateUser('Harshit','vahshisht' , 'harshit@gmail.com', 5, "labour chowk");

const user3=new CreateUser('Harshit','vahshisht' , 'harshit@gmail.cm', 5, "labour chowk");

console.log(user1);