function layout() {
    var root = document.querySelector("#root");
    var header = document.createElement("h1");
    header.innerText = "TODO LIST";
    var navBar = document.createElement('div');
    navBar.id = 'navBar';
    var deleteAll = document.createElement('button');
    var deleteDone = document.createElement('button');
    deleteAll.textContent = 'Delete All';
    deleteDone.textContent = 'Delete Done';
    deleteAll.id = 'DeleteAll';
    deleteDone.id = 'DeleteDone';
    navBar.append(deleteAll, deleteDone);
    var main = document.createElement("main");
    var addTasks = document.createElement("section");
    addTasks.id = "addTask";
    var tasks = document.createElement("ul");
    tasks.id = "tasks";
    var tasksTitle = document.createElement("h2");
    tasksTitle.innerText = "TO DO";
    var tasksDone = document.createElement("ul");
    tasksDone.id = "tasksDone";
    var tasksDoneTitle = document.createElement("h2");
    tasksDoneTitle.innerText = "DONE";
    main.append(addTasks, tasksTitle, tasks, tasksDoneTitle, tasksDone);
    root === null || root === void 0 ? void 0 : root.append(header, navBar, main);
}
layout();
