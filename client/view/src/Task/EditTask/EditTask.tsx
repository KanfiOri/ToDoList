import React, {useState} from 'react'
import { task } from '../../../../entites/interfaces'

interface EditTaskProps {
    taskName: string
    id: number
    tasks: task[]
    onTaskChange: (text: task[]) => void
    onCloseEditTask: () => void
}

const EditTask: React.FC<EditTaskProps> = ({taskName, id, tasks, onTaskChange, onCloseEditTask}) => {
    const [task, setTask] = useState<task>({id: 0, taskName: '', deadLine: new Date(), finished: false})
    const editTask = (taskName: string) => {
        setTask({id: id, taskName: taskName, deadLine: new Date(), finished: false})
    }
    const save = () => {
        const newTasks = tasks.map(item => {
            if (item.id === task.id) {
                return {
                    ...item,
                    taskName: task.taskName
                };
            }
            return item;
        });
        onCloseEditTask()
        onTaskChange(newTasks)
    }
    return(
        <div>
             <input type="text" defaultValue={taskName} onChange={(e) => editTask(e.target.value)} />
             <button onClick={save}>Save</button>
        </div>
    )
}

export default EditTask