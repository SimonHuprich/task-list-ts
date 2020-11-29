import React, { useState, useEffect } from 'react'; 
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Typography from '@material-ui/core/Typography';


const localStorage_key:string = 'tasks'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{id: number, todo: string, completed: boolean} []>([])

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem(localStorage_key)!);
    if(storageTasks) {
      setTasks(storageTasks);
    } 
  }, []); 

  useEffect (() => {
    localStorage.setItem(localStorage_key, JSON.stringify(tasks));
  }, [tasks]); 


  const addTask = (task: any) => {
    setTasks([task, ...tasks]); 
  }

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return {
            ...task, 
            completed: !task.completed
          };
        }
        return task;
      })
    );
  }

  function removeTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id)); 
  }


  return (
    <div className="App">
        <Typography style={{padding: 20}} variant='h2'>
          React Task List</Typography>
        <TaskForm addTask={addTask}/>
        <TaskList 
          tasks={tasks} 
          toggleComplete={toggleComplete}
          removeTask={removeTask} />
      
    </div>
  );
}

export default App;
