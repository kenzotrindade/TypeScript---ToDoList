const taskInput = document.getElementById("taskHolder") as HTMLInputElement;
const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  priority: "low" | "mid" | "hardest";
}
let tasks: Task[] = JSON.parse(localStorage.getItem("mytask") || "[]");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = taskInput.value;
  if (taskValue) {
    let task: Task = {
      id: Date.now().toString(),
      title: taskValue,
      isCompleted: false,
      priority: "low",
    };

    tasks.push(task);
    saveTask();
    console.log(tasks);
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = "";
  const taskCount = document.getElementById("taskCount");
  if (taskCount) {
    taskCount.textContent = `${tasks.length} tâches}`;
  }

  tasks.forEach((t) => {
    const liTask = document.createElement("li");
    liTask.innerHTML = `
      <input type="checkbox" class="task-check" ${t.isCompleted ? "checked" : ""}>
      <span class="task-text" style="text-decoration: ${t.isCompleted ? "line-through" : "none"}; opacity: ${t.isCompleted ? "0.6" : "1"}">
        ${t.title}
      </span>
      <span class="priority-badge priority-${t.priority}">${t.priority}</span>
      <button class="delete-btn" title="Supprimer">✕</button>
    `;
    const checkBox = liTask.querySelector(".task-check") as HTMLInputElement;
    const deleteBtn = liTask.querySelector(".delete-btn") as HTMLButtonElement;

    checkBox.addEventListener("change", () => {
      t.isCompleted = checkBox.checked;
      saveTask();
      renderTasks();
    });

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== t.id);
      saveTask();
      renderTasks();
    });

    taskList.appendChild(liTask);
  });
}

function saveTask() {
  localStorage.setItem("mytask", JSON.stringify(tasks));
}
