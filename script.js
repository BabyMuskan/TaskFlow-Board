const API_URL = 'http://localhost:5000/api/tasks';

document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();

    const taskForm = document.getElementById('task-form');
    if (taskForm) {
        taskForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const title = document.getElementById('task-title').value;
            const description = document.getElementById('task-desc').value;
            const status = document.getElementById('task-status').value;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title, description, status })
                });
                if (response.ok) {
                    taskForm.reset();
                    fetchTasks(); // Refresh tasks list
                }
            } catch (err) {
                console.error('Error adding task:', err);
            }
        });
    }

    // Initialize Drop Zones for columns
    setupDropZones();
});

async function fetchTasks() {
    try {
        const res = await fetch(API_URL);
        const tasks = await res.json();
        
        // Clear columns before appending
        document.getElementById('todo-list').innerHTML = '';
        document.getElementById('inprogress-list').innerHTML = '';
        document.getElementById('done-list').innerHTML = '';

        tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.className = 'task-card';
            taskCard.draggable = true; // Make card draggable
            taskCard.dataset.id = task._id;
            
            taskCard.style.background = '#fff';
            taskCard.style.padding = '10px';
            taskCard.style.marginBottom = '10px';
            taskCard.style.borderRadius = '5px';
            taskCard.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            taskCard.style.cursor = 'grab';
            
            taskCard.innerHTML = `
                <h4 style="color: #2c3e50; margin-bottom: 5px;">${task.title}</h4>
                <p style="font-size: 0.9rem; color: #555;">${task.description || ''}</p>
            `;

            // Drag start event to pass task ID
            taskCard.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', task._id);
            });

            // Flexible status matching to render tasks correctly
            const taskStatus = task.status ? task.status.toLowerCase().trim() : 'todo';

            if (taskStatus === 'todo' || taskStatus === 'to do') {
                document.getElementById('todo-list').appendChild(taskCard);
            } else if (taskStatus === 'in-progress' || taskStatus === 'in progress') {
                document.getElementById('inprogress-list').appendChild(taskCard);
            } else if (taskStatus === 'done') {
                document.getElementById('done-list').appendChild(taskCard);
            }
        });
    } catch (err) {
        console.error('Error fetching tasks:', err);
    }
}

// Function to handle column drop zones and backend sync via PATCH
function setupDropZones() {
    const columns = [
        { id: 'todo-list', status: 'todo' },
        { id: 'inprogress-list', status: 'in-progress' },
        { id: 'done-list', status: 'done' }
    ];

    columns.forEach(col => {
        const container = document.getElementById(col.id);
        if (container) {
            container.addEventListener('dragover', (e) => {
                e.preventDefault(); // Required to allow dropping
            });

            container.addEventListener('drop', async (e) => {
                e.preventDefault();
                const taskId = e.dataTransfer.getData('text/plain');
                if (!taskId) return;

                try {
                    const response = await fetch(`${API_URL}/${taskId}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ status: col.status })
                    });

                    if (response.ok) {
                        fetchTasks(); // Refresh board to reflect the new status
                    } else {
                        console.error('Failed to update task status');
                    }
                } catch (err) {
                    console.error('Error updating task status:', err);
                }
            });
        }
    });
}