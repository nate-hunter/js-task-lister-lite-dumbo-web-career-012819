// VARIABLES:
const ulTag = document.querySelector('#tasks')
const formTag = document.querySelector('#create-task-form')
//-----

// EVENT LISTENERS:
formTag.addEventListener('submit', e => {
  e.preventDefault()
  const taskDescription = document.querySelector('#new-task-description')
  const newTask = document.createElement('li')
  newTask.innerText = taskDescription.value
  ulTag.appendChild(newTask)
});
//-----


// document.addEventListener("DOMContentLoaded", () => {
//
// });
