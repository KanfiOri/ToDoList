import { useState, useEffect, useCallback } from 'react';
import { iDataProvider } from '../../../dataProvider/dataprovider'
import { task } from '../../../entites/interfaces'

interface TasksHook {
  tasks: task[];
  refreshTasks: () => void;
}

const useTasks = (dataProvider: iDataProvider): TasksHook => {
  const [tasks, setTasks] = useState<task[]>([]);

  const refreshTasks = useCallback(() => {
    setTasks(dataProvider.getAllTasks());
  }, [dataProvider]);

  useEffect(() => {
    refreshTasks(); 
    const updateTasks = () => {
      refreshTasks(); // Update tasks when notified of changes
    };

    // Example: Listen for specific events or changes in dataProvider
    // dataProvider.on('change', updateTasks);

    return () => {
      // Cleanup and unsubscribe from event listeners if necessary
      // Example: dataProvider.off('change', updateTasks);
    };
  }, [dataProvider, refreshTasks]);

  return { tasks, refreshTasks };
};

export default useTasks;
