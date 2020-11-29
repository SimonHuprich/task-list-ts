import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core'; 
import CloseIcon from '@material-ui/icons/Close'; 

interface Task {
    task: {id: number, todo: string, completed: boolean}
    toggleComplete: boolean, 
    removeTask: number
}; 

const Task: React.FC<Task> = ({task, toggleComplete, removeTask}) => {
    function handleCheckboxClick() {
        toggleComplete(task.id) 
    }

    function handleRemoveClick() {
        removeTask(task.id)
    }
    
    
    return (
        <ListItem style={{display:'flex'}}>
            <Checkbox 
                checked={task.completed}
                type='checkbox' 
                onClick={handleCheckboxClick}/>
            <Typography
                variant='body1'
                style={{
                    textDecoration: task.completed ? 'line-through' : null
                }}

            >{task.todo}</Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>          
        </ListItem>
    );
}


export default Task; 
