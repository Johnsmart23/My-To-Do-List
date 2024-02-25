    function getCurrentDate() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    }

    function displayDate() {
        document.getElementById('date').innerText = "Today's Date: " + getCurrentDate();
    }

    function addItem() {
        const todoInput = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');
        const todoText = todoInput.value.trim();
        if (todoText === '') return;
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `<input type="text" value="${todoText}" readonly>
                        <button onclick="editItem(this)">Edit</button>
                        <button onclick="deleteItem(this)">Delete</button>`;
        todoList.appendChild(li);
        todoInput.value = '';
    }

    function deleteItem(button) {
        const li = button.parentElement;
        li.remove();
    }

    function editItem(button) {
        const li = button.parentElement;
        const inputField = li.querySelector('input[type="text"]');
        inputField.removeAttribute('readonly');
        inputField.focus();
        button.textContent = 'Save';
        button.setAttribute('onclick', 'saveItem(this)');
    }

    function saveItem(button) {
        const li = button.parentElement;
        const inputField = li.querySelector('input[type="text"]');
        inputField.setAttribute('readonly', true);
        button.textContent = 'Edit';
        button.setAttribute('onclick', 'editItem(this)');
    }

    displayDate();