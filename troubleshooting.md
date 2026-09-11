# TaskFlow Agile Board - Troubleshooting Log

## 1. Drag-and-Drop Drop Event Restriction
* *Issue*: Initially, dragging a task card over a column and dropping it did not trigger the drop action or move the element.
* *Cause*: By default, HTML elements (like div containers) do not allow elements to be dropped onto them. The browser blocks drop actions unless explicitly prevented.
* *Solution*: Added e.preventDefault() inside both the dragover and drop event listeners on the column elements to enable proper drop authorization.

## 2. State Persistence Across Refreshes
* *Issue*: Moving tasks across columns worked, but refreshing the browser reverted all tasks back to their initial default states.
* *Cause*: The application state was solely stored in memory (tasks array) without persistence.
* *Solution*: Integrated browser localStorage by checking for saved items on load and calling localStorage.setItem() whenever a task status changed during a drop event.