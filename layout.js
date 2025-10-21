function layout() {
    var root = document.querySelector("#root");
    var header = document.createElement("h1");
    header.innerText = "TODO LIST";
    //   root?.appendChild(header);
    var main = document.createElement("main");
    //   root?.appendChild(main);
    var addTasks = document.createElement("section");
    addTasks.id = "addTask";
    var tasks = document.createElement("ul");
    tasks.id = "tasks";
    var tasksTitle = document.createElement("h2");
    tasksTitle.innerText = "TO DO";
    //   tasks.appendChild(tasksTitle);
    var tasksDone = document.createElement("ul");
    tasksDone.id = "tasksDone";
    var tasksDoneTitle = document.createElement("h2");
    tasksDoneTitle.innerText = "DONE";
    //   tasksDone.appendChild(tasksDoneTitle);
    main.append(addTasks, tasksTitle, tasks, tasksDoneTitle, tasksDone);
    root === null || root === void 0 ? void 0 : root.append(header, main);
}
layout();
