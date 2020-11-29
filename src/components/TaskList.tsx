import React from 'react';
import Task from './Task';
import { List } from '@material-ui/core'; 

interface TaskDef {
    tasks: {id: number, todo: string, completed: boolean}[]
    toggleComplete: number, 
    removeTask: number
}; 

const TaskList: React.FC<TaskDef> = ({ tasks, toggleComplete, removeTask }) => {
    return (
        <List>
            {tasks.map((task: {id: number, todo: string, completed: boolean}) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    toggleComplete={toggleComplete} 
                    removeTask={removeTask}
                    />
            ))}
        </List>
    )
}

export default TaskList;