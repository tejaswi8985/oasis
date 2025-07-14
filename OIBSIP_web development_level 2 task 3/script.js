let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskForm = document.getElementById('taskForm');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('description');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

let editIndex = -1;

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${task.title}</strong><br>${task.description}
      <div class="timestamp">Added: ${task.createdAt}</div>
      ${task.completed ? `<div class="timestamp">Completed: ${task.completedAt}</div>` : ''}
      <div class="actions">
        <button onclick="deleteTask(${index})" title="Delete"><i class="fa-solid fa-trash"></i></button>
        <button onclick="editTask(${index})" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
        ${!task.completed ? `<button onclick="completeTask(${index})" title="Mark Complete"><i class="fa-solid fa-check"></i></button>` : ''}
      </div>
    `;

    if (task.completed) {
      completedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
  });
}

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title || !description) return;

  const now = new Date().toLocaleString();

  if (editIndex === -1) {
    tasks.push({ title, description, createdAt: now, completed: false });
  } else {
    tasks[editIndex].title = title;
    tasks[editIndex].description = description;
    editIndex = -1;
  }

  titleInput.value = '';
  descInput.value = '';
  saveTasks();
});

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
}

function editTask(index) {
  titleInput.value = tasks[index].title;
  descInput.value = tasks[index].description;
  editIndex = index;
}

function completeTask(index) {
  tasks[index].completed = true;
  tasks[index].completedAt = new Date().toLocaleString();
  saveTasks();
}

renderTasks();
