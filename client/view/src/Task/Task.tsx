import React, {useState} from 'react'
import { task } from '../../../entites/interfaces'
import EditTask from './EditTask/EditTask'
import { iDataProvider } from '../../../dataProvider/dataprovider'

interface TaskProps {
    task: task
    dataProvider: iDataProvider
}

const Task: React.FC<TaskProps> = ({ task, dataProvider }) => {
    const [editTask, setEditTask] = useState(false)
    const [isChecked, setIsChecked] = useState(task.finished)
    const deleteTask = () => {
        dataProvider.deleteTask(task.id)
    }
    const OpenOrCloseEditTask = () => {
        setEditTask(!editTask)
    }   
    return(
        <div>
            <span>{ task.taskName }</span>
            <input type="checkbox" checked={isChecked} />
            <button onClick={ deleteTask }>delete</button>
            <button onClick={ OpenOrCloseEditTask }>edit</button>
            {
                editTask && <EditTask key = {task.id} task={task} dataProvider={dataProvider} onCloseEditTask={OpenOrCloseEditTask}/>
            }
        </div>
    )
}

export default Task;