import React, {useState} from 'react';
import ToDoInput from '../ToDoInput/ToDoInput';
import ToDoList from '../ToDoList/ToDoList';
import { iDataProvider } from '../../../dataProvider/dataprovider'
import './ToDoApp.css'

interface ToDoAppProps {
  dataProvider: iDataProvider
}

const ToDoApp: React.FC<ToDoAppProps> = ({ dataProvider }) => {
  return (
    <div className='container'>
      <div className='app'>
        <ToDoInput dataProvider= {dataProvider}/>
        <ToDoList dataProvider= {dataProvider} />
      </div>
    </div>
  );
};

export default ToDoApp;
