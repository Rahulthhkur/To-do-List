import React from 'react';
import './SearchBox.css'; 

const SearchBox = ({ searchTerm, setSearchTerm }) => { // Define SearchBox functional component, accepting searchTerm and setSearchTerm props
  return (
    <input
      className="search-box" // Apply 'search-box' class to input element
      type="text" // Set input type to text
      placeholder="Search tasks" // Placeholder text
      value={searchTerm} // Value of the input controlled by searchTerm prop
      onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
    />
  );
};

export default SearchBox; 
