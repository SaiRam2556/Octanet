document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newTodoInput = document.getElementById('new-todo');
    const newTodoText = newTodoInput.value.trim();

    if (newTodoText !== '') {
        const todoList = document.getElementById('todo-list');
        const newTodoItem = document.createElement('li');
        newTodoItem.textContent = newTodoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            todoList.removeChild(newTodoItem);
        };

        newTodoItem.appendChild(deleteButton);
        todoList.appendChild(newTodoItem);

        newTodoInput.value = '';
    }
});
