// Animal class

class Animal{
    constructor(name , age){
    this.name=name;
    this.age=age;
    }
    eat(){
      return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}

// const animal1=new Animal("tom",2);
// console.log(animal1);

// dog class

// class dog{
//     constructor(name , age){
//         this.name=name;
//         this.age=age;
//         }
//         eat(){
//           return `${this.name} is eating`;
//         }
//         isSuperCute(){
//             return this.age<=1;
//         }
//         isCute(){
//             return true;
//         }
// }

// const tommy =new dog("tommy", 3);
// console.log(tommy.eat());

// sirf ek animal class banakr dog cat sab banjaega
// Now if i wants to make a new class but also wants to 
// add the properties of previous class

// edhar animal parent class hogi
class dog extends Animal{
     
}
// ye edhar same kam karega
// const tommy =new dog("tommy", 3);
// console.log(tommy.eat());
