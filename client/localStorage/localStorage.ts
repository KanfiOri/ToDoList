import { iDataProvider } from "../dataProvider/dataprovider";
import { task } from "../entites/interfaces";

class LocalStorageDataProvider implements iDataProvider {
    getAllTasks(): task[] {
        const tasksString = localStorage.getItem('tasks');
        return tasksString ? JSON.parse(tasksString) : [];
    }

    getTask(id: number): task {
        const tasks = this.getAllTasks();
        const task = tasks.find(task => task.id === id);
        if(task) return task
        else {
            throw new Error("there is no such a task ID")
        }
    }

    addTask(task: task): void {
        const tasks = this.getAllTasks();
        const newTask: task = task;
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    deleteTask(id: number): void {
        let tasks = this.getAllTasks();
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    updateTask(id: number, taskName: string): void {
        let tasks = this.getAllTasks();
        const taskToUpdate = tasks.find(task => task.id === id);
        if (taskToUpdate) {
            taskToUpdate.taskName = taskName;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    deleteAllTasks(): void {
        localStorage.removeItem('tasks');
    }
}

export default LocalStorageDataProvider