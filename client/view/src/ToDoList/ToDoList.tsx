import React from 'react'
import Task from '../Task/Task'
import { task } from '../../../entites/interfaces'

interface ToDoListProps {
    tasks: task[]
    onTaskChange: (text: task[]) => void
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks, onTaskChange }) => {
    const deleteAllTasks = () => {
        onTaskChange([])
    }
    const deleteFinishedTasks = () => {
        const unFinishedTasks = tasks.filter((task) => {
            return task.finished === false
        })
        console.log('unFinishedTasks: ', unFinishedTasks)
        onTaskChange(unFinishedTasks)
    }
    return(
        <div>
            <h1>ToDoList</h1>
            <button>All</button>
            <button>Done</button>
            <button>Todo</button>
            <div>
                {
                    tasks.map((task) => {
                        return(
                            <Task key={task.id} taskName={task.taskName} id={task.id} tasks={tasks} onTaskChange={onTaskChange} isFinished={task.finished} />
                        )
                    })
                }
            </div>
            <button onClick={ deleteFinishedTasks }>Delete finished tasks</button>
            <button onClick={ deleteAllTasks }>Delete all tasks</button>
        </div>
    )
}

export default ToDoList