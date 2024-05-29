import React from 'react'; 
import './TodoItem.css'; 

const TodoItem = ({ task, index, toggleComplete, editTask, deleteTask }) => { // Define TodoItem functional component, accepting props
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}> {/* Render a div with 'todo-item' class, conditionally adding 'completed' class based on task completion status */}
      <div>
        <span className="task-number">{index + 1}. </span> {/* Render task number */}
        <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3> {/* Render task title, conditionally adding 'completed' class based on task completion status */}
        <p className={task.completed ? 'completed' : ''}>{task.description}</p> {/* Render task description, conditionally adding 'completed' class based on task completion status */}
      </div>
      <div>
        <button onClick={(e) => { e.stopPropagation(); editTask(task); }}>Edit</button> {/* Button to edit task, preventing event propagation */}
        <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>Delete</button> {/* Button to delete task, preventing event propagation */}
      </div>
    </div>
  );
};

export default TodoItem; // Export TodoItem component
