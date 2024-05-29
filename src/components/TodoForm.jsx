import React, { useState } from 'react'; 
import './TodoForm.css'; 

const TodoForm = ({ addTask }) => { // Define TodoForm functional component, accepting addTask prop
  const [title, setTitle] = useState(''); // State for task title
  const [description, setDescription] = useState(''); // State for task description

  const handleSubmit = (e) => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    addTask({ title, description }); // Call addTask function with new task object
    setTitle(''); // Clear title input
    setDescription(''); // Clear description input
  };

  return (
    <form onSubmit={handleSubmit}> {/* Render a form with onSubmit event handler */}
      <input
        type="text"
        placeholder=" Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state on input change
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update description state on input change
        required
      ></textarea>
      <button className='btnadd' type="submit">Add Task</button> {/* Button to submit form */}
    </form>
  );
};

export default TodoForm; 
