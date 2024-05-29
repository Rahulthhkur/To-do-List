import React from 'react';
import TodoItem from './TodoItem'; 
import './TodoList.css'; 

const TodoList = ({ tasks, toggleComplete, editTask, deleteTask }) => { // Define TodoList functional component, accepting props
  return (
    <div className="todo-list"> {/* Render a div with 'todo-list' class */}
      {tasks.map((task, index) => ( // Map over tasks array and render TodoItem for each task
        <TodoItem
          key={task.id} // Set key to task's id
          task={task} // Pass task object as prop
          index={index} // Pass index of task in the tasks array as prop
          toggleComplete={toggleComplete} // Pass toggleComplete function as prop
          editTask={editTask} // Pass editTask function as prop
          deleteTask={deleteTask} // Pass deleteTask function as prop
        />
      ))}
    </div>
  );
};

export default TodoList; 
