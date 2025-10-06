class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }
}

class TaskManager{
    constructor(){
        this.tasks = [];

    }

    addTask(description){
        const task = new Task(description);
        this.tasks.push(task);
        this.displayTasks();
    }

    removeTasks(index){
        this.tasks.splice(index, 1);
        this.displayTasks();
    }

    toggleTaskCompletiob(index){
        this.task[index].toggleComplete();
        this.displayTasks();
    }

    displayTasks(){
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';

            const taskDescription = document.createElement('span');
        })
    }
}