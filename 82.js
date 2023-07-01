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

 
class dog extends Animal{
    constructor(name, age, speed){
     super(name, age);    // es line se name or age vo pehle construtor se hi lelega this is called the super method
     this.speed=speed;
    }
    // pehle esi mai dekhega jab ni milega tub upar jaega
    eat(){
         return `modified eat`;
    }
    run(){
        return `${this.name} is running at the speed of ${this.speed}`; 
    }

}

// object/ instance
const tommy = new dog("tommy",3,45);
console.log(tommy.run());
console.log(tommy.eat());