import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList'; 
import SearchBox from './components/SearchBox'; 
import './App.css'; 

const App = () => { // Define App functional component
  const [tasks, setTasks] = useState(() => { // State for storing tasks
    const storedTasks = localStorage.getItem('tasks'); // Retrieve tasks from local storage
    return storedTasks ? JSON.parse(storedTasks) : []; // Parse storedTasks or return empty array
  });
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [showPopup, setShowPopup] = useState(false); // State for displaying popup

  useEffect(() => { // Effect hook to store tasks in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Store tasks in local storage
  }, [tasks]);

  const addTask = (task) => { // Function to add a new task
    task.id = Date.now(); // Assign a unique id to the task
    task.completed = false; // Set completed status to false
    setTasks([...tasks, task]); // Add the new task to the tasks array
  };

  const toggleComplete = (taskId) => { // Function to toggle task completion status
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)); // Toggle completion status for the selected task
    setShowPopup(true); // Show popup when task is toggled
    setTimeout(() => {
      setShowPopup(false); // Hide popup after 2 seconds
    }, 2000);
  };

  const editTask = (updatedTask) => { // Function to edit a task
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task)); // Update the task in the tasks array
  };

  const deleteTask = (taskId) => { // Function to delete a task
    setTasks(tasks.filter(task => task.id !== taskId)); // Filter out the task with the specified id
  };

  const filteredTasks = tasks.filter(task => // Filter tasks based on search term
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container"> {/* Main container */}
      <h1>To-Do List</h1> {/* Heading */}
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* SearchBox component */}
      <TodoForm addTask={addTask} /> {/* TodoForm component */}
      <p>Total Tasks: {tasks.length}</p> {/* Display total number of tasks */}
      <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} editTask={editTask} deleteTask={deleteTask} /> {/* TodoList component */}
      {showPopup && <div className="popup">Task Done!</div>} {/* Popup message */}
    </div>
  );
};

export default App;
