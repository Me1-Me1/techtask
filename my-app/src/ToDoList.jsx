import React, { useState } from "react"

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function handleEditInputChange(e) {
        setCurrentTask({...currentTask, text: e.target.value});
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if(newTask.trim() !== ""){
            setTasks(t => [...t, {id: t.length + 1, text: newTask, completed: false}]);
            setNewTask("");
        }
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
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
            {isEditing ? (
                <form onSubmit={handleEditFormSubmit}>
                    <input type="text"
                    value={currentTask.text}
                    onChange={handleEditInputChange}></input>
                    <button className="edit-button" type="submit">Edit</button>
                    <button className="delete-button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
            <form onSubmit={handleFormSubmit}>
                <input type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}/>
                <button className="add-button" type="submit">Add Task</button>
            </form>)}

            <ul>
                {tasks.map((task) => 
                <li key={task.id}> 
                <span style={{textDecoration: task.completed ? "line-through" : "none", opacity: task.completed ? 0.7 : 1}}>
                    <input 
                        className="done-checkbox"
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleTaskCompletion(task.id)}
                    />
                    {task.text}
                </span>
                    <button className="edit-button" onClick={() => handleEdit(task)}>Edit</button> 
                    <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>  
                </li>)}
            </ul>
        </div>
    );   
}

export default ToDoList