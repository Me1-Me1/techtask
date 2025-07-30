import React, { useState } from "react"
import { NewTaskForm } from "./NewTaskForm";
import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});

    function handleFormSubmit(task) {
        setTasks(t => {return [...t, {id: t.length + 1, text: task, completed: false},]
            });
    }

    function handleEditedTask(editedTask) {
        setTasks(tasks.map(task => task.id === editedTask.id ? editedTask : task));

}

    function handleEdit(task) {
        setIsEditing(true);
        setCurrentTask({...task});
    }

    function handleDelete(id) {
        const updatedTasks = tasks.filter((t) => t.id !== id);
        setTasks(updatedTasks);
    }

    function handleTaskCompletion(id) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div class="to-do-list">
            <h1>To Do List</h1>
            {isEditing ? ( <EditTaskForm 
                currentTask={currentTask}
                setIsEditing={setIsEditing}
                onEditFormSubmit={handleEditedTask}
            />   
            ) : ( <NewTaskForm 
                    onFormSubmit={handleFormSubmit}
            />)}
            <ul>
                {tasks.map((task) => 
                <TaskItem
                    task={task}
                    onCompletionChange={handleTaskCompletion}
                    onEditClick={handleEdit}
                    onDeleteCLick={handleDelete}
                />)}
            </ul>
        </div>
    );   
}

export default ToDoList