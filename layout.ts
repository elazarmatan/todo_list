function layout() {
  const root = document.querySelector<HTMLElement>("#root");
  const header = document.createElement("h1");
  header.innerText = "TODO LIST";
  const main = document.createElement("main");
  const addTasks = document.createElement("section");
  addTasks.id = "addTask";
  const tasks = document.createElement("ul");
  tasks.id = "tasks";
  const tasksTitle = document.createElement("h2");
  tasksTitle.innerText = "TO DO";
  const tasksDone = document.createElement("ul");
  tasksDone.id = "tasksDone";
  const tasksDoneTitle = document.createElement("h2");
  tasksDoneTitle.innerText = "DONE";
  main.append(addTasks,tasksTitle, tasks,tasksDoneTitle, tasksDone);
  root?.append(header,main)
}
layout();
