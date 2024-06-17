// Selecting elements from the DOM
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const countValue = document.getElementById("count-value");

// Event listener for form submission
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const todoText = todoInput.value.trim(); // Trim whitespace from input

  if (todoText !== "") {
    addTodoItem(todoText); // Add the new task to the list
    todoInput.value = ""; // Clear the input field
  }
});

// Function to add a new task
function addTodoItem(todoText) {
  const listItem = document.createElement("li");
  listItem.innerText = todoText;

  console.log(listItem);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function () {
    listItem.remove();
    deletCount(listItem);

    // Remove the task when delete button is clicked
  });

  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.addEventListener("click", function () {
    listItem.classList.toggle("done");
    addCount(listItem);

    // Toggle 'done' class on click
  });

  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);
}

let taskCount = 0;

function addCount() {
  taskCount += 1;
  countValue.textContent = taskCount;
}

function deletCount() {
  taskCount -= 1;

  countValue.textContent = taskCount;
}
