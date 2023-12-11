import React, {useState} from 'react'
import {task} from '../../../entites/interfaces'
import { iDataProvider } from '../../../dataProvider/dataprovider';
import useTasks from '../hooks/useTasks';

interface ToDoInputProps {
    dataProvider: iDataProvider
}

const ToDoInput: React.FC<ToDoInputProps> = ({dataProvider}) => {
    const tasks = dataProvider.getAllTasks()
    const randomNumber = Math.floor(Math.random() * 1000000) + 1; 
    const [task, setTask] = useState<task>({id: 0, taskName: '', deadLine: new Date(), finished: false})
    const addTask = () => {
        if(!tasks.find((taskInArray) => task.id === taskInArray.id) && task.taskName !== "") {
            dataProvider.addTask(task)
        }
    }
    const editTask = (taskName: string) => {
        setTask({id: randomNumber, taskName: taskName, deadLine: new Date, finished: false})
    }
    return(
        <div>
            <h1>ToDoInput</h1>
            <input type="text" onChange={(e) => editTask(e.target.value)}></input>
            <button onClick={ addTask }>Add new Task</button>
        </div>
    )
}

export default ToDoInput