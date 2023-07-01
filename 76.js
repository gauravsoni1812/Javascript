// New keyword interview specific

function createUser(firstname , age){
    this.firstname=firstname;
    this.age=age;
}
createUser.prototype.about=function(){
     console.log(this.firstname, this.age);
}
const user1 = new createUser("Gaurav" , 8);

//new keyword edhar 3 kaam karrha hai 
// 1.) creating empty object and value of empty object is this = {}
// 2.)return this
// 3rd kaam ye kya karta hai ki user1 ka proto vo apne ap hi
// prototype ke equal set kardega
// so basically jo kaam ham 75th file mai ham mannually
// karrhe the vo kaam ab yahan new keyword apne ap karega 
// matlab jo cheez createUser wale function mai na mile vo 
//prototype mai jakr dhoondh lega 

user1.about();