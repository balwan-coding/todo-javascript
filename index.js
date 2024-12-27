let todoList = [{ item: "today is complete my work", dueDate: "12/23/45" }];

function localstorageItems() {
  let storageItems = localStorage.getItem("todoList");

  if (storageItems) {
    todoList = JSON.parse(storageItems);
  }
}
localstorageItems();
displayContainer();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let inputValue = inputElement.value;
  let dateValue = dateElement.value;
  todoList.push({ item: inputValue, dueDate: dateValue });
  inputElement.value = "";
  dateElement.value = "";
  displayContainer();
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function displayContainer() {
  let displayElement = document.querySelector(".display-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span> 
    <span>${dueDate}</span>
    <button class="delete-button" onclick="todoList.splice(${i} ,1);  displayContainer() , localStorage.clear(${i})">Delete</button>
   `;
  }

  displayElement.innerHTML = newHtml;
}
