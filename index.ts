//function that create task in the localstorage
function createTask(task: string) {
  const finishTask = { task: task, id: 0 };
  let dataExist;
  try {
    dataExist = JSON.parse(localStorage?.getItem("tasks") ?? "[]");
  } catch (error) {
    dataExist = [];
  }
  if (dataExist[0]?.id) {
    finishTask.id = dataExist[0]?.id + 1;
  } else {
    finishTask.id = 1;
  }
  dataExist.unshift(finishTask);
  localStorage.setItem("tasks", JSON.stringify(dataExist));
}


//function that delete list of tasks to the localstorage
function deleteList(){
  let allTasks = JSON.parse(localStorage?.getItem("tasks") ?? "[]");
  let tasksDoneExist = JSON.parse(localStorage?.getItem("tasksDone") ?? "[]");
  const missions = document.querySelector("#tasks");
  const tasksDone = document.querySelector("#tasksDone");
  const deleteAll = document.querySelector('#DeleteAll')
  deleteAll?.addEventListener('click',e => {
    allTasks = []
    tasksDoneExist = []
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    localStorage.setItem("tasksDone", JSON.stringify(tasksDoneExist));
    if(tasksDone)tasksDone.innerHTML = ''
    if(missions)missions.innerHTML = ''
  })
  const deleteDone = document.querySelector('#DeleteDone')
  deleteDone?.addEventListener('click',e => {
    tasksDoneExist = []
    localStorage.setItem("tasksDone", JSON.stringify(tasksDoneExist));
    if(tasksDone)tasksDone.innerHTML = ''
  })
}



//function that update task in the localstorage
function updateTask(id: number, newTask: string | null) {
  const allTasks = JSON.parse(localStorage?.getItem("tasks") ?? "[]");
  const finishData = allTasks.map((task) =>
    task.id !== id ? task : { task: newTask, id: id }
  );
  localStorage.setItem("tasks", JSON.stringify(finishData));
}


//function that delete task to the localstorage
function deleteTask(id: number, list: string) {
  const allTasks = JSON.parse(localStorage?.getItem(list) ?? "[]");
  const finishData = allTasks.filter((task) => task.id !== id);
  localStorage.setItem(list, JSON.stringify(finishData));
}



function TasksDone(id: number, lista: string, listb: string) {
  const allTasks = JSON.parse(localStorage?.getItem(listb) ?? "[]");
  const tasksDone = allTasks.filter((task) => task.id === id);
  deleteTask(id, listb);
  const tasksDoneExist = JSON.parse(localStorage?.getItem(lista) ?? "[]");
  tasksDoneExist.unshift(tasksDone[0]);
  localStorage.setItem(lista, JSON.stringify(tasksDoneExist));
}



function getAllTasks(selector: string) {
  const allTasks = JSON.parse(localStorage?.getItem("tasks") ?? "[]");
  const tasksDoneExist = JSON.parse(localStorage?.getItem("tasksDone") ?? "[]");
  const missions = document.querySelector("#tasks");
  const tasksDone = document.querySelector("#tasksDone");
  if (selector === "tasks") {
    allTasks.forEach((taskObj) => task(taskObj.task, missions, taskObj.id));
  } else if (selector === "done") {
    tasksDoneExist.forEach((taskObj) =>
      task(taskObj.task, tasksDone, taskObj.id)
    );
  }
}



function task(task: string, container: Element | null, id: number) {
  const mission = document.createElement("li");
  const taskP = document.createElement("p");
  taskP.innerText = task;

  //remove task
  const removeTask = document.createElement("button");
  removeTask.textContent = "remove";
  removeTask.addEventListener("click", () => {
    deleteTask(id, mission.parentElement!.id);
    removeTask.parentElement?.remove();
  });

  //done
  const labelDone = document.createElement("label");
  labelDone.htmlFor = `${id}`;
  const checkDone = document.createElement("input");
  checkDone.id = `${id}`;
  if (container?.id === "tasks") {
    labelDone.textContent = "done";
  } else if (container?.id === "tasksDone") {
    labelDone.textContent = "not done";
  }

  checkDone.addEventListener("change", (e) => {
    if (mission.parentElement?.id === "tasks") {
      labelDone.textContent = "not done";
      mission.removeChild(edit);
      TasksDone(id, "tasksDone", "tasks");
      const tasksDone = document.querySelector("#tasksDone");
      tasksDone?.appendChild(mission);
    } else if (mission.parentElement?.id === "tasksDone") {
      labelDone.textContent = "done";
      mission.appendChild(edit);
      TasksDone(id, "tasks", "tasksDone");
      const missions = document.querySelector("#tasks");
      missions?.appendChild(mission);
    }
  });
  checkDone.type = "checkbox";

  //edit
  const edit = document.createElement("button");
  edit.id = 'edit'
  edit.textContent = "edit";
  edit.addEventListener("click", () => {
    taskP.setAttribute("contenteditable", "true");
    taskP.focus();
  });
  let originalText: string | null;
  taskP.addEventListener("focus", () => {
    originalText = taskP.textContent;
  });
  taskP.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateTask(id, taskP.textContent);
      taskP.setAttribute("contenteditable", "false");
    }
    if (e.key === "Escape") {
      e.preventDefault();
      taskP.textContent = originalText;
      taskP.setAttribute("contenteditable", "false");
    }
  });

  const done = document.createElement("div");
  done.append(checkDone, labelDone);
  mission.append(done, taskP, removeTask);
  if (container?.id === "tasks") {
    mission.append(edit)
  } else if (container?.id === "tasksDone") {
    checkDone.checked = true;
  }
  container?.appendChild(mission);
}



function addTask() {
  const addMission = document.querySelector("#addTask");
  const input = document.createElement("input");
  input.placeholder = "add task";
  input.name = "add";
  input.id = "addInp";
  addMission?.appendChild(input);
  const missions = document.querySelector("#tasks");
  input.addEventListener("keydown", (e) => {
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



deleteList()
getAllTasks("tasks");
getAllTasks("done");
addTask();
