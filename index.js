function createTask(task) {
    var _a, _b, _c;
    var finishTask = { 'task': task, id: 0 };
    var dataExist;
    try {
        dataExist = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('tasks')) !== null && _a !== void 0 ? _a : '[]');
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
    localStorage.setItem('tasks', JSON.stringify(dataExist));
}
function updateTask(id, newTask) {
    var _a;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('tasks')) !== null && _a !== void 0 ? _a : '[]');
    var finishData = allTasks.map(function (task) { return task.id !== id ? task : { 'task': newTask, id: id }; });
    localStorage.setItem('tasks', JSON.stringify(finishData));
}
function deleteTask(id) {
    var _a;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('tasks')) !== null && _a !== void 0 ? _a : '[]');
    var finishData = allTasks.filter(function (task) { return task.id !== id; });
    localStorage.setItem('tasks', JSON.stringify(finishData));
}
function tasksDone() {
}
function getAllTasks() {
    var _a;
    var allTasks = JSON.parse((_a = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('tasks')) !== null && _a !== void 0 ? _a : '[]');
    var missions = document.querySelector("#tasks");
    allTasks.forEach(function (taskObj) { return task(taskObj.task, missions, taskObj.id); });
}
function task(task, container, id) {
    var mission = document.createElement("li");
    var taskP = document.createElement('p');
    taskP.innerText = task;
    var removeTask = document.createElement("button");
    removeTask.textContent = "remove";
    removeTask.addEventListener("click", function () {
        var _a;
        deleteTask(id);
        (_a = removeTask.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    });
    var labelDone = document.createElement('label');
    labelDone.htmlFor = 'done';
    labelDone.textContent = 'done';
    var checkDone = document.createElement("input");
    checkDone.id = 'done';
    checkDone.addEventListener("change", function (e) {
        var _a, _b;
        if (((_a = mission.parentElement) === null || _a === void 0 ? void 0 : _a.id) === "tasks") {
            labelDone.textContent = 'not done';
            mission.removeChild(edit);
            var tasksDone_1 = document.querySelector("#tasksDone");
            tasksDone_1 === null || tasksDone_1 === void 0 ? void 0 : tasksDone_1.appendChild(mission);
        }
        else if (((_b = mission.parentElement) === null || _b === void 0 ? void 0 : _b.id) === "tasksDone") {
            labelDone.textContent = 'done';
            mission.appendChild(edit);
            container === null || container === void 0 ? void 0 : container.appendChild(mission);
        }
    });
    checkDone.type = "checkbox";
    var edit = document.createElement('button');
    edit.textContent = 'edit';
    edit.addEventListener('click', function () {
        taskP.setAttribute('contenteditable', 'true');
        taskP.focus();
    });
    var originalText;
    taskP.addEventListener('focus', function () {
        originalText = taskP.textContent;
    });
    taskP.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateTask(id, taskP.textContent);
            console.log(taskP.textContent);
            taskP.setAttribute('contenteditable', 'false');
        }
        if (e.key === 'Escape') {
            e.preventDefault();
            taskP.textContent = originalText;
            taskP.setAttribute('contenteditable', 'false');
        }
    });
    var done = document.createElement('div');
    done.append(checkDone, labelDone);
    mission.append(done, taskP, removeTask, edit);
    container === null || container === void 0 ? void 0 : container.appendChild(mission);
}
function addTask() {
    var addMission = document.querySelector("#addTask");
    var input = document.createElement("input");
    input.placeholder = "add task";
    input.name = "add";
    input.id = 'addInp';
    addMission === null || addMission === void 0 ? void 0 : addMission.appendChild(input);
    var missions = document.querySelector("#tasks");
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            if (input.value) {
                createTask(input.value);
                missions && (missions.innerHTML = "");
                getAllTasks();
            }
            input.value = '';
        }
    });
}
getAllTasks();
addTask();
