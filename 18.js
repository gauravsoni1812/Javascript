// How to get the dimension of the element 
// height and width

const sectionTodo=document.querySelector(".section-todo");
const info= sectionTodo.getBoundingClientRect(); 
console.log( info);