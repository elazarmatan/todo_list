var root = document.querySelector("main");
function addTask(main) {
    var addMission = document.querySelector("#addTask");
    var input = document.createElement("input");
    input.placeholder = "add";
    input.name = "add";
    addMission === null || addMission === void 0 ? void 0 : addMission.appendChild(input);
    var missions = document.querySelector("#tasks");
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            if (input.value) {
                var mission_1 = document.createElement("li");
                mission_1.innerHTML = input.value;
                var removeTask_1 = document.createElement("button");
                removeTask_1.textContent = "remove";
                removeTask_1.addEventListener("click", function () {
                    var _a;
                    (_a = removeTask_1.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                });
                var done = document.createElement("input");
                done.addEventListener("change", function (e) {
                    var _a, _b;
                    if (((_a = mission_1.parentElement) === null || _a === void 0 ? void 0 : _a.id) === "tasks") {
                        var tasksDone = document.querySelector("#tasksDone");
                        tasksDone === null || tasksDone === void 0 ? void 0 : tasksDone.appendChild(mission_1);
                        // done.parentElement?.remove()
                    }
                    else if (((_b = mission_1.parentElement) === null || _b === void 0 ? void 0 : _b.id) === "tasksDone") {
                        missions === null || missions === void 0 ? void 0 : missions.appendChild(mission_1);
                        // done.parentElement?.remove()
                    }
                });
                done.type = "checkbox";
                mission_1.appendChild(done);
                mission_1.appendChild(removeTask_1);
                missions === null || missions === void 0 ? void 0 : missions.appendChild(mission_1);
            }
            input.value = '';
        }
    });
}
addTask(root);
