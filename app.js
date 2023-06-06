const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

let tasks = [];

function createTask(title, description, dueDate) {
  const task = {
    title,
    description,
    dueDate,
    completed: false
  };
  tasks.push(task);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Due Date: ${task.dueDate}</p>
      <button onclick="completeTask(${index})">Complete</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    if (task.completed) {
      li.classList.add('completed');
    }

    taskList.appendChild(li);
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskDueDate = document.getElementById('taskDueDate').value;
  createTask(taskTitle, taskDescription, taskDueDate);
  this.reset();
});

renderTasks();
