// Select the input field and the list element
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span onclick="toggleComplete(this)">${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}

// Function to toggle completed status of a task
function toggleComplete(task) {
    task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(taskButton) {
    taskButton.parentElement.remove();
}
