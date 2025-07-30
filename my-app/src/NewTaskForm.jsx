import React, { useState } from "react";

export function NewTaskForm({
    task,
    onFormChange,
    onFormSubmit
}) {

    return (
    <form onSubmit={onFormSubmit}>
                <input type="text"
                placeholder="Enter a task"
                value={task}
                onChange={onFormChange}
                />
                <button className="add-button" type="submit">Add Task</button>
            </form>
            )
}