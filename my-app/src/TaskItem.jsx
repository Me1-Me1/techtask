export default function TaskItem({
    task,
    onCompletionChange,
    onEditClick,
    onDeleteCLick
}) {
    return (
       <li className="task-container" key={task.id}> 
                <span className={`task-content ${task.completed ? "completed" : ""}`}>
                    <input 
                        className="done-checkbox"
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onCompletionChange(task.id)}
                    />
                    {task.text}
                </span>
                    <button className="edit-button" onClick={() => onEditClick(task)}>Edit</button> 
                    <button className="delete-button" onClick={() => onDeleteCLick(task.id)}>Delete</button>  
                </li>);
    
}