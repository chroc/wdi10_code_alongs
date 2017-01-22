var newTodo = document.getElementById('new-todo');
var addTodo = document.getElementById('add-todo');
var todoList = document.getElementById('todo-list');

var removeLi = function(e) {
  e.target.classList.toggle('strike-through');
};

var createLi = function() {
  if (newTodo.value !== '') {
    var liElement = document.createElement('li');
    liElement.textContent = newTodo.value;
    todoList.appendChild(liElement);
    newTodo.value = "";
  }
}

addTodo.addEventListener("click", createLi);
todoList.addEventListener("click", removeLi);
