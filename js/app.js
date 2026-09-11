// State management: Using the tasks array from data.js
let tasks = initialTasks;
let draggedTaskId = null;

// Select DOM elements
const taskContainers = {
    todo: document.getElementById('todo-container'),
    inprogress: document.getElementById('inprogress-container'),
    done: document.getElementById('done-container')
};

// 1. Render the board based on the current tasks array
function renderBoard() {
    // Clear all containers first
    Object.values(taskContainers).forEach(container => {
        container.innerHTML = '';
    });

    // Loop through tasks and create DOM elements
    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.draggable = true;
        card.dataset.id = task.id;
        card.innerText = task.title;

        // Add drag event listeners to each card
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);

        // Append to the correct column container
        if (taskContainers[task.status]) {
            taskContainers[task.status].appendChild(card);
        }
    });
}

// 2. Drag Start Event
function handleDragStart(e) {
    draggedTaskId = e.target.dataset.id;
    e.target.classList.add('dragging');
}

// 3. Drag End Event
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedTaskId = null;
    
    // Remove drag-over styling from columns
    document.querySelectorAll('.kanban-column').forEach(col => {
        col.classList.remove('drag-over');
    });
}

// 4. Setup Drop Zones (Columns)
const columns = document.querySelectorAll('.kanban-column');

columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault(); // CRITICAL: Required to allow dropping!
        column.classList.add('drag-over');
    });

    column.addEventListener('dragleave', () => {
        column.classList.remove('drag-over');
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        column.classList.remove('drag-over');

        const newStatus = column.dataset.status;

        // Update task status in our array state
        const task = tasks.find(t => t.id === draggedTaskId);
        if (task && task.status !== newStatus) {
            task.status = newStatus;
            renderBoard(); // Re-render DOM to reflect changes
        }
    });
});

// Initial render on page load
renderBoard();