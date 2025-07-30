import React, { useState } from "react"
import { NewTaskForm } from "./NewTaskForm";
import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }
        function handleFormSubmit(e) {
        e.preventDefault();
        setNewTask(e.target.value)
        if(newTask.trim() !== ""){
            setTasks(t => [...t, {id: t.length + 1, text: newTask, completed: false}]);
            setNewTask("");
        }
    }

    function handleEditInputChange(e) {
        setCurrentTask({...currentTask, text: e.target.value});
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        setCurrentTask({...currentTask, text: e.target.value});
        handleEditedTask(currentTask.id, currentTask)
    }

    function handleEditedTask(id, editedTask) {
        const edited = tasks.map((task) => {
            return task.id === id ? editedTask : task;
        })
        setIsEditing(false);
        setTasks(edited);
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
                onEditFormChange={handleEditInputChange}
                onEditFormSubmit={handleEditFormSubmit}
            />   
            ) : ( <NewTaskForm 
                    task={newTask}
                    onFormChange={handleInputChange}
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