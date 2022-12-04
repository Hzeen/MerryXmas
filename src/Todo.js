const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function SaveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function DeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => String(toDo.id) !== String(li.id));
  SaveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
  button.addEventListener("click", DeleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  SaveTodos();
}
todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach((element) => {
    paintTodo(element);
  });
  console.log(parsedTodos);
}
