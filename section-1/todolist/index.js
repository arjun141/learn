let todoList = localStorage.getItem('todoList') || [];
function addTodo(){
    var taskName = document.querySelector('#taskname').value;
    var $todoList = document.querySelector('#todo-items');
    var $form = document.querySelector('#todoForm');

    taskName = taskName.trim();
    if(taskName.length > 0){
        todoList.push({taskName, completed: false});
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    $todoList.appendChild(createTodo(taskName, todoList.length-1));
    $form.reset();

    return false;
}

function deleteTask(){
    todoList.splice(this.getAttribute('data-index'), 1);
    this.parentElement.parentElement.removeChild(this.parentElement);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function completeTask(id){
    todoList[this.getAttribute('data-index')].completed = true;
    this.previousSibling.setAttribute('class', 'striked');
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function createTodo(taskName, index){
    var $task = document.createElement('div');
    var $taskName = document.createElement('div')
    var $deleteButton = document.createElement('button');
    var $completedButton = document.createElement('button');
    var $hr = document.createElement('hr');
    $taskName.textContent = taskName;
    $deleteButton.innerText = "Delete";
    $deleteButton.onclick = deleteTask;
    $deleteButton.setAttribute('data-index', index);
    $completedButton.textContent = "Completed";
    $completedButton.setAttribute('data-index', index);
    $completedButton.onclick = completeTask;
    $task.appendChild($taskName);
    $task.appendChild($completedButton);
    $task.appendChild($deleteButton);
    $task.appendChild($hr);
    return $task;
}

function onload(){
    console.log(todoList);
}