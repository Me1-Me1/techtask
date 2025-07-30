export default function EditTaskForm({
    currentTask,
    setIsEditing,
    onEditFormChange,
    onEditFormSubmit
}) {
    return (<form onSubmit={onEditFormSubmit} onChange={onEditFormChange}>
                    <input type="text"
                    value={currentTask.text}
                    />
                    <button className="edit-button" type="submit">Edit</button>
                    <button className="delete-button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>)
}