import React, {useState} from 'react'
import { task } from '../../../entites/interfaces'
import EditTask from './EditTask/EditTask'

interface TaskProps {
    taskName: string
    id: number
    tasks: task[]
    onTaskChange: (text: task[]) => void,
    isFinished: boolean
}

const Task: React.FC<TaskProps> = ({ taskName, id, tasks, onTaskChange, isFinished }) => {
    const [editTask, setEditTask] = useState(false)
    const [isChecked, setIsChecked] = useState(isFinished)
    const deleteTask = () => {
        const newTasks = tasks.filter((task) => task.id !== id)
        if(newTasks) {
            onTaskChange(newTasks)
        }
    }
    const OpenOrCloseEditTask = () => {
        setEditTask(!editTask)
    }   
    return(
        <div>
            <span>{ taskName }</span>
            <input type="checkbox" checked={isChecked} />
            <button onClick={ deleteTask }>delete</button>
            <button onClick={ OpenOrCloseEditTask }>edit</button>
            {
                editTask && <EditTask key = {id} taskName={taskName} id={id} tasks={tasks} onTaskChange={onTaskChange} onCloseEditTask={OpenOrCloseEditTask}/>
            }
        </div>
    )
}

export default Task;