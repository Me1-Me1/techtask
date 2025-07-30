import { useState } from "react"

export default function EditTaskForm({
    currentTask,
    setIsEditing,
    onEditFormSubmit
}) {

    const [editedTask, setEditedTask] = useState(currentTask.text);

    function onEditSubmit(e) {
        e.preventDefault();
        if (editedTask.trim() !== "") {
            onEditFormSubmit({ ...currentTask, text: editedTask.trim() });
        };
        setIsEditing(false);

    };

    return (<form onSubmit={onEditSubmit} >
                <input type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    />
                <button className="edit-button" type="submit">Edit</button>
                <button className="delete-button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>)
}