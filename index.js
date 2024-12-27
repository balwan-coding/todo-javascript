let todoList = [
  { item: "I read in books", dueDate: "12/12/2024" },
  { item: "I read in class", dueDate: "12/12/2024" },
];
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
}

function displayContainer() {
  let displayElement = document.querySelector(".display-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span> 
    <span>${dueDate}</span>
    <button class="delete-button" onclick="todoList.splice(${i} ,1);  displayContainer()">Delete</button>
   `;
  }

  displayElement.innerHTML = newHtml;
}
