// document.createElement();//esko sare developers use karte hain

// append
// prepend
// remove

// const newTodoItem= document.createElement("li");
// // const newTodoItemText=document.createTextNode("Teach students");
// newTodoItem.textContent ="Teach Students";// Ye bhi append karega
// // thats how you insert text on the elements by using append 
// // but append elements ko last mai add karta hai 
// // We have something calle prepend jo starting mai add kargdega
// // console.log(newTodoItem);
// const todoList=document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// console.log(newTodoItem);



// Now i want to remove todo1
const todo1=document.querySelector('.todo-list li');
console.log(todo1);
todo1.remove();

// Now abhi tak apan section todo container mai ul mai li ke 
// baad or pehle append karrhe the Now i want to append 
// before ul so for that i use before and after

const newTodoItem= document.createElement("li");
newTodoItem.textContent ="Teach Students";
// const newTodoItemText=document.createTextNode("Teach students");

const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
// Now agr yehi chezz tum after se karoeg to after insert hojaega 
