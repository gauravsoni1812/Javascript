const user1={
    firstname:"gaurav",
    age:8,
    about:function(){
        // console.log(this);
        console.log(this.firstname , this.age);
    }
}

// dont do this mistake

// const myFunc=user1.about;
// myFunc();
// So make this thing clear in your mind that if
// you want to store anything as a function then you need 
// to use the bind function

// const myFunc=user1.about.bind(user1);
// myFunc();
// //basic thing function ko store karne ke lie bind hi use hoga
