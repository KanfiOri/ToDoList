import React, {useState} from 'react'
import {task} from '../../../entites/interfaces'

interface ToDoInputProps {
    tasks: task[]
    onTaskChange: (text: task[]) => void
}

const ToDoInput: React.FC<ToDoInputProps> = ({tasks, onTaskChange}) => {
    const randomNumber = Math.floor(Math.random() * 1000000) + 1; 
    const [task, setTask] = useState<task>({id: 0, taskName: '', deadLine: new Date(), finished: false})
    const addTask = () => {
        if(!tasks.find((taskInArray) => task.id === taskInArray.id) && task.taskName !== "") {
            onTaskChange([...tasks, task])
        }
    }
    return(
        <div>
            <h1>ToDoInput</h1>
            <input type="text" onChange={(e) => {setTask({id: randomNumber, taskName: e.target.value, deadLine: new Date, finished: false})}}></input>
            <button onClick={ addTask }>Add new Task</button>
        </div>
    )
}

export default ToDoInput