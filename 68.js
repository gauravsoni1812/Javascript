// const user1={ 
//     firsname:"harshit",
//     age:8,
//     about: function(){
//         console.log(this.firstname, this.age);
//     }
// }

// Now not everytime you have to write a function as a key 
// value pair you can just write about(){} function

const user1={ 
    firstname:"harshit",
    age:8,
    about(){
        console.log(this.firstname, this.age);
    }
}

user1.about();