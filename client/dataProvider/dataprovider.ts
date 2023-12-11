import { task } from '../entites/interfaces'

export interface iDataProvider {
    getAllTasks: () => task[] 
    getTask: (id: number) => task
    addTask: (task: task) => void
    deleteTask: (id: number) => void
    deleteAllTasks: () => void
    updateTask: (id: number, taskName: string) => void
}
