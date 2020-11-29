import React, { useState } from 'react'; 
import {Button, TextField} from '@material-ui/core'; 

interface TaskDef {
    addTask: [{id: number, todo: string, completed: boolean}]
}

const TaskForm: React.FC<TaskDef>= ({addTask}) => {
    const [task, setTask] = useState({
        id: '',
        todo: '',
        completed: false
    });

    const handleTaskInputChange = (e: { target: { value: any; }; }) => {
        setTask({...task, todo: e.target.value})
    }; 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(task.todo.trim()) {
            addTask({...task, id: Math.floor(Math.random()*10000)});

            setTask({...task, todo:''});
        }
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <TextField 
            label='Task'
            name=''
            type='text'
            value={task.todo} 
            onChange={handleTaskInputChange} 
            />
            <Button type='submit'>Submit</Button>
        </form>
    )
}

export default TaskForm; 