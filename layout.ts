const root = document.querySelector<HTMLElement>('#root')
const header = document.createElement('h1')
header.innerText = 'TODO LIST'
root?.appendChild(header)
const main = document.createElement('main')
root?.appendChild(main)
const addTasks = document.createElement('section')
addTasks.id = 'addTask'
const tasks = document.createElement('ul')
tasks.id = 'tasks'
const tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'TO DO'
tasks.appendChild(tasksTitle)
const tasksDone = document.createElement('ul')
tasksDone.id = 'tasksDone'
const tasksDoneTitle = document.createElement('h2')
tasksDoneTitle.innerText = 'DONE'
tasksDone.appendChild(tasksDoneTitle)
main.appendChild(addTasks)
main?.appendChild(tasks)
main?.appendChild(tasksDone)