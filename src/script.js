// Get references to the input field, button, and list
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
function addTodo() {
    // Get the value of the input field
    const todoText = todoInput.value;

    // Only add the item if the input field is not empty
    if (todoText !== '') {
        // Create a new list item element
        const newItem = document.createElement('li');

        // Set the text of the new list item
        newItem.textContent = todoText;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.className = 'delete-button';

        // Add an event listener to the delete button to remove the item when clicked
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newItem);
        });

        // Append the delete button to the list item
        newItem.appendChild(deleteButton);

        // Add the new list item to the list
        todoList.appendChild(newItem);

        // Clear the input field
        todoInput.value = '';
    }
}

// Add an event listener to the button to call the addTodo function when clicked
addButton.addEventListener('click', addTodo);

// Optional: Add an event listener to the input field to add a to-do when the Enter key is pressed
todoInput.addEventListener('keypress', function(event) {g
    if (event.key === 'Enter' || 'return') {
        addTodo();
    }
});
