const addTaskButton = document.getElementById("addTask");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.classList.add("task-item");
        taskList.appendChild(taskItem);
        taskInput.value = "";

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        taskItem.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            taskItem.remove();
        });
    }
});
