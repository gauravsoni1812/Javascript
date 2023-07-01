// getters and setters

class person{
     constructor(firstname, lastname, age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age; 
     }
    get fullname(){ 
        return `${this.firstname} ${this.lastname}`;
    }
    setName (firsname, lastname){
        this.firstname=firsname;
        this.lastname=lastname;         
    }
}

const person1= new person("Gaurav", "soni", 45);
// console.log(person1.fullname());
// console.log(person1.fullname);

person1.setName("mohit" ,"sir");

console.log(person1.fullname);

