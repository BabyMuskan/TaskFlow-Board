# TaskFlow - Agile Kanban Board (MERN Stack)

TaskFlow is a full-stack MERN (MongoDB, Express.js, Node.js, Vanilla JavaScript) Agile Kanban Board application designed for efficient task management with persistent database synchronization and HTML5 drag-and-drop capabilities.

## Features
* *Dynamic Task Creation:* Add tasks with a title, description, and initial status (To Do, In Progress, Done).
* *Persistent Data Storage:* MongoDB database integration via Mongoose to ensure data is permanently stored.
* *HTML5 Drag and Drop:* Seamlessly drag task cards across different status columns.
* *Real-time Backend Synchronization:* Uses asynchronous PATCH requests to instantly update task statuses in the database upon dropping.
* *Responsive UI:* Clean and structured Kanban interface.

## Tech Stack
* *Frontend:* HTML5, CSS3, Vanilla JavaScript (DOM Manipulation & HTML5 Drag-and-Drop API)
* *Backend:* Node.js, Express.js
* *Database:* MongoDB Atlas / Mongoose ODM

## Project Structure
```text
taskflow-fresh/
│
├── models/
│   └── Task.js          # Mongoose schema for tasks
├── server.js            # Express server and database connection setup
├── public/              # Frontend static files (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation