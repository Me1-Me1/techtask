export default function TaskItem({
    task,
    onCompletionChange,
    onEditClick,
    onDeleteCLick
}) {
    return (
       <li key={task.id}> 
                <span className="task-item" style={{textDecoration: task.completed ? "line-through" : "none", opacity: task.completed ? 0.7 : 1}}>
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