const root = document.querySelector<HTMLElement>("main");
function addTask(main: HTMLElement | null) {
  const addMission = document.querySelector("#addTask");
  const input = document.createElement("input");
  input.placeholder = "add";
  input.name = "add";
  addMission?.appendChild(input);
  const missions = document.querySelector("#tasks");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input.value) {
        const mission = document.createElement("li");
        mission.innerHTML = input.value;
        const removeTask = document.createElement("button");
        removeTask.textContent = "remove";
        removeTask.addEventListener("click", () => {
          removeTask.parentElement?.remove();
        });
        const done = document.createElement("input");
        done.addEventListener("change", (e) => {
          if (mission.parentElement?.id === "tasks") {
            const tasksDone = document.querySelector("#tasksDone");
            tasksDone?.appendChild(mission);
            // done.parentElement?.remove()
          } else if (mission.parentElement?.id === "tasksDone") {
            missions?.appendChild(mission);
            // done.parentElement?.remove()
          }
        });
        done.type = "checkbox";
        mission.appendChild(done);
        mission.appendChild(removeTask);
        missions?.appendChild(mission);
      }
      input.value = ''
    }
  });
}
addTask(root);
