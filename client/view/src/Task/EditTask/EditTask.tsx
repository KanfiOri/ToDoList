import React, {useState} from 'react'
import { task } from '../../../../entites/interfaces'
import { iDataProvider } from '../../../../dataProvider/dataprovider'

interface EditTaskProps {
    task: task,
    dataProvider: iDataProvider
    onCloseEditTask: () => void
}

const EditTask: React.FC<EditTaskProps> = ({task, dataProvider, onCloseEditTask}) => {
    const [editedTask, setEditedTask] = useState<task>({id: 0, taskName: '', deadLine: new Date(), finished: false})
    const editTask = (taskName: string) => {
        setEditedTask({id: task.id, taskName: taskName, deadLine: new Date(), finished: false})
    }
    const tasks = dataProvider.getAllTasks()
    const save = () => {
        // const newTasks = tasks.map(item => {
        //     if (item.id === task.id) {
        //         return {
        //             ...item,
        //             taskName: task.taskName
        //         };
        //     }
        //     return item;
        // });
        // onCloseEditTask()
        // onTaskChange(newTasks)
    }
    return(
        <div>
             <input type="text" defaultValue={task.taskName} onChange={(e) => editTask(e.target.value)} />
             <button onClick={save}>Save</button>
        </div>
    )
}

export default EditTask