const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')

todoForm.addEventListener('submit',function(event) {
    event.preventDefault();
    const newTask  = todoInput.value;
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }
    todoInput.value = '';
});

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    todoList.appendChild(listItem);
}

// todoForm.addEventListener('submit', function(event) {
//     addTask(newTask);
// });

function addTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span')
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}

checkBox.addEventListener('change', function() {
    if(this.checked) {
        taskText.style.textDecoration = 'line-through';
    } else{
        taskText.style.textDecoration = 'none';
    }
})

deleteButton.addEventListener('click', function() {
    todoList.removeChild(listItem);
});

function addTask(task) {
    constEditButton = document.createElement('button');
    editButton.textContent = 'Edit';
    listItem.appendChild(editButton);
}

edit


function saveTasksToLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#todo-list li').forEach(task => {
        const taskText = task.querySelector('span').textContent;
        const isCompleted = task.classList.contains('completed');
        tasks.push({text: taskText, completed: isCompleted});
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        addTask(task.text);
    })
})