import React, {useState} from 'react';
import ToDoInput from '../ToDoInput/ToDoInput';
import ToDoList from '../ToDoList/ToDoList';
import data from '../../../logic/data'

const ToDoApp: React.FC = () => {
  const [tasks, setTasks] = useState(data)
  return (
    <div>
      <ToDoInput tasks= {tasks} onTaskChange={setTasks}/>
      <ToDoList tasks={ tasks } onTaskChange={setTasks} />
    </div>
  );
};

export default ToDoApp;
