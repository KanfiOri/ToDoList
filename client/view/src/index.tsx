import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './ToDoApp/ToDoApp';

import LocalStorageDataProvider from '../../localStorage/localStorage'

const dataProvider = new LocalStorageDataProvider

ReactDOM.render(<ToDoApp dataProvider={dataProvider} />, document.getElementById('root'));
