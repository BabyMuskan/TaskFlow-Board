<<<<<<< HEAD
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
=======
# TaskFlow Agile Board

A lightweight, feature-rich Agile Kanban Board built with vanilla JavaScript, HTML5 Drag-and-Drop API, and CSS. Developed as part of the Web Development coursework.

## 🚀 Features
* *HTML5 Drag-and-Drop API: Seamlessly drag tasks across columns (*To Do, In Progress, Done) without relying on third-party libraries.
* *State Management*: Real-time synchronization of task statuses and DOM updates.
* *LocalStorage Persistence*: Automatically saves your tasks in the browser so your progress isn't lost on refresh.
* *Responsive UI*: Clean and structured layout styled with modern CSS.

## 🛠️ Tech Stack
* *HTML5*
* *CSS3 / Flexbox / Grid*
* *Vanilla JavaScript (ES6)*
* *Vercel* (for Deployment)

## 📌 Live Demo
Check out the live deployment here: [TaskFlow Board Live](https://task-flow-board-xi.vercel.app/

---
Developed by Muskan
>>>>>>> 9a6ca58721173fb6d9ebe02afaa4f8b52542ec74
