var root = document.querySelector("#root");
function addTask(element) {
    var addMission = document.createElement("section");
    element === null || element === void 0 ? void 0 : element.appendChild(addMission);
    var input = document.createElement("input");
    input.placeholder = "add";
    input.name = "add";
    addMission === null || addMission === void 0 ? void 0 : addMission.appendChild(input);
    var create = document.createElement("button");
    create.textContent = "submit";
    addMission.appendChild(create);
    var missions = document.createElement("ul");
    element === null || element === void 0 ? void 0 : element.appendChild(missions);
    create.addEventListener("click", function (e) {
        e.preventDefault();
        var mission = document.createElement("li");
        mission.innerHTML = input.value;
        var removeTask = document.createElement('button');
        removeTask.textContent = 'remove';
        removeTask.addEventListener('click', function () {
            var _a;
            (_a = removeTask.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        });
        var done = document.createElement('input');
        done.type = 'checkbox';
        mission.appendChild(done);
        mission.appendChild(removeTask);
        missions.appendChild(mission);
    });
}
addTask(root);
