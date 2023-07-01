//Add new Html elements to page



//innerHTML to add html element

const todoList=document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// todoList.innerHTML="<li>New Todo</li>" ye line pura hi 
// innerhtml change karegi but i want ko todo likha rhe or 
// naya add hojae
todoList.innerHTML += "<li>New Todo</li"+ "<li>Teach Students</li>";

// when you should use it , when you should not

// Now es cheez ko kabhi use ni karna hai