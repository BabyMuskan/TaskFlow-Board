# TaskFlow MERN Project - Troubleshooting & Error Logs

## 1. Task Rendering & Status Matching Issue
* *Symptom:* Backend se tasks successfully fetch ho rahe thay (API response theek tha) lekin Kanban board ki columns (To Do, In Progress, Done) mein show nahi ho rahe thay.
* *Cause:* Database mein save shuda status fields aur frontend ki conditional logic ke darmiyan case-sensitivity aur hidden spaces ka farq tha.
* *Resolution:* Frontend (script.js) mein .toLowerCase().trim() ka istemal karke status ko normalize kiya gaya taake tasks (todo, in-progress, done) sahi DOM elements mein route ho saken.

## 2. Drag-and-Drop State Persistence Issue
* *Symptom:* Task cards ko ek column se doosri column mein drag karna mumkin nahi ho raha tha, ya drag karne par status database mein persist nahi ho raha tha.
* *Cause:* Column ke dragover event listener par default behavior ko prevent karne ke liye e.preventDefault() mojud nahi tha, aur dataTransfer ke zariye task IDs pass nahi ho rahi thin.
* *Resolution:* HTML5 drag-and-drop handlers configure kiye gaye—dragstart par task ID pass ki gayi, dragover par default roka gaya, aur drop par /api/tasks/:id par asynchronous PATCH request bheji gayi taake database sync ho sake aur board automatically refresh ho jaye.
*