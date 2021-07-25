document.addEventListener("DOMContentLoaded", () => {
  addTask();
})

function addTask() {
  const form  = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const task = document.getElementById("new-task-description").value;
    const list = document.getElementById("tasks");
    const item = document.createElement("li");
    item.innerText = task;
    list.appendChild(item);
  })  
}