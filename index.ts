const root = document.querySelector<HTMLElement>("#root");
function addTask(element: HTMLElement | null) {
  const addMission = document.createElement("section");
  element?.appendChild(addMission);
  const input = document.createElement("input");
  input.placeholder = "add";
  input.name = "add";
  addMission?.appendChild(input);
  const create = document.createElement("button");
  create.textContent = "submit";
  addMission.appendChild(create);
  const missions = document.createElement("ul");
  element?.appendChild(missions);
  create.addEventListener("click", (e) => {
    e.preventDefault();
    const mission = document.createElement("li");
    mission.innerHTML = input.value;
    const removeTask = document.createElement('button')
    removeTask.textContent = 'remove'
    removeTask.addEventListener('click',() => {
        removeTask.parentElement?.remove()
    })
    const done = document.createElement('input')
    done.type = 'checkbox'
    mission.appendChild(done)
    mission.appendChild(removeTask)
    missions.appendChild(mission);
  });
}
addTask(root)
