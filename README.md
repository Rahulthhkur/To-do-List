# React.js Todo List

This is a simple Todo List web application built with React.js for managing tasks. Users can add, view, edit, and delete tasks. The application uses local storage to persist tasks between sessions and includes a search functionality to filter tasks.

## Features

- Add new tasks with title and description.
- View a list of existing tasks.
- Edit tasks.
- Delete tasks.
- Mark tasks as completed (with a strikethrough effect).
- Filter tasks by searching with a keyword.
- Popup notification when a task is marked as done.
- Tasks persist between sessions using local storage.

## Project Structure

- `App.jsx`: The main component that holds the state and renders `TodoForm`, `TodoList`, and `SearchBox` components.
- `components/`: Directory containing the following components:
  - `TodoForm.jsx`: A form to add a new task.
  - `TodoList.jsx`: A section to display existing tasks.
  - `TodoItem.jsx`: Individual task item showing title, description, and buttons for editing and deleting.
  - `SearchBox.jsx`: A text box to search among all todos.
- `styles/`: Directory containing CSS files for styling the components:
  - `App.css`: General styles for the app.
  - `TodoForm.css`: Styles for the `TodoForm` component.
  - `TodoList.css`: Styles for the `TodoList` component.
  - `TodoItem.css`: Styles for the `TodoItem` component.
  - `SearchBox.css`: Styles for the `SearchBox` component.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/react-todo-list.git
