// Project using event delegation 
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");
todoForm.addEventListener("submit", () => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = ` <span class="text">${newTodoText}</span>
     <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
     </div>
   `;
  newLi.innerHTML= newLiInnerHtml;
  todoList.append(newLi);
    todoInput.value = "";
})