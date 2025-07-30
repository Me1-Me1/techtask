import React, { useState } from "react";

export function NewTaskForm({ onFormSubmit }) {

    const [newTask, setNewTask] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
        if(newTask.trim() !== ""){
            onFormSubmit(newTask.trim())
        };
        setNewTask("")}

    return (
    <form onSubmit={handleFormSubmit}>
        <input type="text"
            maxLength={64}
            placeholder="Enter a task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
        />
        <button className="add-button" disabled={newTask.trim() === ""} type="submit">Add Task</button>
    </form>
            )
}