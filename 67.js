//Arrow functions
//Arrow functions ka this ni hota hai
//Arrow function this surrounding se leta hai
// Matlab edhar arrow function ka this user1 ni hoga uske ek 
// level upr windows hoga
// or arrow function ka this ap change ni karsakte even if you wanted to like user1.about.call(user1)
//like that
const user1 = {
    firstName:"Gaurav",
    age:4,
    about:()=>{
        console.log(this.firstname,
        this.age);
    }
}

user1.about();