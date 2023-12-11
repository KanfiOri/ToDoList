import React, {useEffect, useState} from 'react'
import Task from '../Task/Task'
import { task } from '../../../entites/interfaces'
import { iDataProvider } from '../../../dataProvider/dataprovider'
import useTasks from '../hooks/useTasks'

interface ToDoListProps {
    dataProvider: iDataProvider
}

const ToDoList: React.FC<ToDoListProps> = ({ dataProvider }) => {
    const {tasks, refreshTasks} = useTasks(dataProvider) 
    const deleteAllTasks = () => {
        dataProvider.deleteAllTasks()
        refreshTasks()
    }
    const deleteFinishedTasks = () => {
        tasks.forEach((task) => {
            if(task.finished) {
                dataProvider.deleteTask(task.id)
            }
        })
        refreshTasks()
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
                            <Task key={task.id} task={task} dataProvider={dataProvider}  />
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