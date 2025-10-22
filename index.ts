function createTask(task:string){
    const finishTask = {'task':task,id :0}
    let dataExist
    try {
        dataExist= JSON.parse(localStorage?.getItem('tasks') ?? '[]')
    } catch (error) {
        dataExist = []
    }
    if(dataExist[0]?.id){
        finishTask.id = dataExist[0]?.id + 1
    } 
    else{
        finishTask.id = 1
    }     
    dataExist.unshift(finishTask)
    localStorage.setItem('tasks',JSON.stringify(dataExist))
}
function updateTask(){}
function deleteTask(){}
function getAllTasks(){
    const allTasks= JSON.parse(localStorage?.getItem('tasks') ?? '[]')
    const missions = document.querySelector("#tasks");
    allTasks.forEach(taskObj => task(taskObj.task,missions))
}
function task(task:string,container:Element|null){
        const mission = document.createElement("li");
        const taskP = document.createElement('p')
        taskP.innerText = task
        const removeTask = document.createElement("button");
        removeTask.textContent = "remove";
        removeTask.addEventListener("click", () => {
          removeTask.parentElement?.remove();
        });
         const labelDone = document.createElement('label')
        labelDone.htmlFor = 'done'
        labelDone.textContent = 'done'
        const checkDone = document.createElement("input");
        checkDone.id = 'done'
        checkDone.addEventListener("change", (e) => {
          if (mission.parentElement?.id === "tasks") {
            labelDone.textContent = 'not done'
            mission.removeChild(edit)
            const tasksDone = document.querySelector("#tasksDone");
            tasksDone?.appendChild(mission);
          } else if (mission.parentElement?.id === "tasksDone") {
            labelDone.textContent = 'done'
            mission.appendChild(edit)
            container?.appendChild(mission);
          }
          });
        checkDone.type = "checkbox";
        const edit = document.createElement('button')
        edit.textContent = 'edit'
        edit.addEventListener('click',() => {
            taskP.setAttribute('contenteditable','true')
            taskP.focus()
        })
        let originalText:string | null
        taskP.addEventListener('focus',() => {
            originalText = taskP.textContent
        })
        taskP.addEventListener('keydown',e => {
            if(e.key === 'Enter'){
                e.preventDefault()
                taskP.setAttribute('contenteditable','false')
            }
            if(e.key === 'Escape'){
                e.preventDefault()
                taskP.textContent = originalText
                taskP.setAttribute('contenteditable','false')
            }
        })
        const done = document.createElement('div')
        done.append(checkDone,labelDone)
        mission.append(done,taskP,removeTask,edit)
        container?.appendChild(mission);  
}

function addTask() {
  const addMission = document.querySelector("#addTask");
  const input = document.createElement("input");
  input.placeholder = "add task";
  input.name = "add";
  input.id = 'addInp'
  addMission?.appendChild(input);
  const missions = document.querySelector("#tasks");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input.value) {
        createTask(input.value)
        task(input.value,missions)
        missions && (missions.innerHTML = "");
        getAllTasks()
      } 
      input.value = ''
    }
  });
}
getAllTasks()
addTask();