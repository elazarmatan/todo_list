function createTask(task) {
    var _a, _b, _c;
    var finishTask = { task: task, id: 0 };
    var dataExist;
    try {
        dataExist = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("tasks")) !== null && _a !== void 0 ? _a : "[]");
    }
    catch (error) {
        dataExist = [];
    }
    if ((_b = dataExist[0]) === null || _b === void 0 ? void 0 : _b.id) {
        finishTask.id = ((_c = dataExist[0]) === null || _c === void 0 ? void 0 : _c.id) + 1;
    }
    else {
        finishTask.id = 1;
    }
    dataExist.unshift(finishTask);
    localStorage.setItem("tasks", JSON.stringify(dataExist));
}
function deleteList() {
    var _a, _b;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("tasks")) !== null && _a !== void 0 ? _a : "[]");
    var tasksDoneExist = JSON.parse((_b = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("tasksDone")) !== null && _b !== void 0 ? _b : "[]");
    var missions = document.querySelector("#tasks");
    var tasksDone = document.querySelector("#tasksDone");
    var deleteAll = document.querySelector('#DeleteAll');
    deleteAll === null || deleteAll === void 0 ? void 0 : deleteAll.addEventListener('click', function (e) {
        allTasks = [];
        tasksDoneExist = [];
        localStorage.setItem("tasks", JSON.stringify(allTasks));
        localStorage.setItem("tasksDone", JSON.stringify(tasksDoneExist));
        tasksDone === null || tasksDone === void 0 ? void 0 : tasksDone.innerHTML = '';
        missions === null || missions === void 0 ? void 0 : missions.innerHTML = '';
    });
    var deleteDone = document.querySelector('#DeleteDone');
    deleteDone === null || deleteDone === void 0 ? void 0 : deleteDone.addEventListener('click', function (e) {
        tasksDoneExist = [];
        localStorage.setItem("tasksDone", JSON.stringify(tasksDoneExist));
        tasksDone === null || tasksDone === void 0 ? void 0 : tasksDone.innerHTML = '';
    });
}
function updateTask(id, newTask) {
    var _a;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("tasks")) !== null && _a !== void 0 ? _a : "[]");
    var finishData = allTasks.map(function (task) {
        return task.id !== id ? task : { task: newTask, id: id };
    });
    localStorage.setItem("tasks", JSON.stringify(finishData));
}
function deleteTask(id, list) {
    var _a;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(list)) !== null && _a !== void 0 ? _a : "[]");
    var finishData = allTasks.filter(function (task) { return task.id !== id; });
    localStorage.setItem(list, JSON.stringify(finishData));
}
function TasksDone(id, lista, listb) {
    var _a, _b;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(listb)) !== null && _a !== void 0 ? _a : "[]");
    var tasksDone = allTasks.filter(function (task) { return task.id === id; });
    deleteTask(id, listb);
    var tasksDoneExist = JSON.parse((_b = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(lista)) !== null && _b !== void 0 ? _b : "[]");
    tasksDoneExist.unshift(tasksDone[0]);
    localStorage.setItem(lista, JSON.stringify(tasksDoneExist));
}
function getAllTasks(selector) {
    var _a, _b;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("tasks")) !== null && _a !== void 0 ? _a : "[]");
    var tasksDoneExist = JSON.parse((_b = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("tasksDone")) !== null && _b !== void 0 ? _b : "[]");
    var missions = document.querySelector("#tasks");
    var tasksDone = document.querySelector("#tasksDone");
    if (selector === "tasks") {
        allTasks.forEach(function (taskObj) { return task(taskObj.task, missions, taskObj.id); });
    }
    else if (selector === "done") {
        tasksDoneExist.forEach(function (taskObj) {
            return task(taskObj.task, tasksDone, taskObj.id);
        });
    }
}
function task(task, container, id) {
    var mission = document.createElement("li");
    var taskP = document.createElement("p");
    taskP.innerText = task;
    //remove task
    var removeTask = document.createElement("button");
    removeTask.textContent = "remove";
    removeTask.addEventListener("click", function () {
        var _a, _b;
        deleteTask(id, (_a = mission.parentElement) === null || _a === void 0 ? void 0 : _a.id);
        (_b = removeTask.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    });
    //done
    var labelDone = document.createElement("label");
    labelDone.htmlFor = "".concat(id);
    var checkDone = document.createElement("input");
    checkDone.id = "".concat(id);
    if ((container === null || container === void 0 ? void 0 : container.id) === "tasks") {
        labelDone.textContent = "done";
    }
    else if ((container === null || container === void 0 ? void 0 : container.id) === "tasksDone") {
        labelDone.textContent = "not done";
    }
    checkDone.addEventListener("change", function (e) {
        var _a, _b;
        if (((_a = mission.parentElement) === null || _a === void 0 ? void 0 : _a.id) === "tasks") {
            labelDone.textContent = "not done";
            mission.removeChild(edit);
            TasksDone(id, "tasksDone", "tasks");
            var tasksDone = document.querySelector("#tasksDone");
            tasksDone === null || tasksDone === void 0 ? void 0 : tasksDone.appendChild(mission);
        }
        else if (((_b = mission.parentElement) === null || _b === void 0 ? void 0 : _b.id) === "tasksDone") {
            labelDone.textContent = "done";
            mission.appendChild(edit);
            TasksDone(id, "tasks", "tasksDone");
            var missions = document.querySelector("#tasks");
            missions === null || missions === void 0 ? void 0 : missions.appendChild(mission);
        }
    });
    checkDone.type = "checkbox";
    //edit
    var edit = document.createElement("button");
    edit.textContent = "edit";
    edit.addEventListener("click", function () {
        taskP.setAttribute("contenteditable", "true");
        taskP.focus();
    });
    var originalText;
    taskP.addEventListener("focus", function () {
        originalText = taskP.textContent;
    });
    taskP.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            updateTask(id, taskP.textContent);
            console.log(taskP.textContent);
            taskP.setAttribute("contenteditable", "false");
        }
        if (e.key === "Escape") {
            e.preventDefault();
            taskP.textContent = originalText;
            taskP.setAttribute("contenteditable", "false");
        }
    });
    var done = document.createElement("div");
    done.append(checkDone, labelDone);
    mission.append(done, taskP, removeTask);
    if ((container === null || container === void 0 ? void 0 : container.id) === "tasks") {
        mission.append(edit);
    }
    else if ((container === null || container === void 0 ? void 0 : container.id) === "tasksDone") {
        checkDone.checked = true;
    }
    container === null || container === void 0 ? void 0 : container.appendChild(mission);
}
function addTask() {
    var addMission = document.querySelector("#addTask");
    var input = document.createElement("input");
    input.placeholder = "add task";
    input.name = "add";
    input.id = "addInp";
    addMission === null || addMission === void 0 ? void 0 : addMission.appendChild(input);
    var missions = document.querySelector("#tasks");
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            if (input.value) {
                createTask(input.value);
                missions && (missions.innerHTML = "");
                getAllTasks("tasks");
            }
            input.value = "";
        }
    });
}
deleteList();
getAllTasks("tasks");
getAllTasks("done");
addTask();
