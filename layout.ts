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
const tasksDone = document.createElement('ul')
tasksDone.id = 'tasksDone'
const title = document.createElement('h2')
title.innerText = 'DONE'
tasksDone.appendChild(title)
main.appendChild(addTasks)
main?.appendChild(tasks)
main?.appendChild(tasksDone)