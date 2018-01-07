let Task = require('./task')
let Repo = require('./taskRepo')

let task1 = new Task('this is task 1')
let task2 = new Task('this is task 2')
let task3 = new Task('this is task 3')

console.log(task1.completed)
task1.complete()
console.log(task1.completed)
//task1.save()

let fancyTask = new Task(Repo.get(1))

console.log(fancyTask.name);

fancyTask.save()