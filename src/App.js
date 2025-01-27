import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;



// Project Name: Task Manager App
// Features:
// Add tasks with a title and description.
// Mark tasks as completed.
// Delete tasks.
// Filter tasks by status (all, completed, pending).

// Core Concepts: Demonstrates knowledge of React components, state, and props.
// Features: Shows ability to create interactive UI elements.
// Reusability: Components are modular and reusable.
// Styling: Includes custom CSS for design.
// You can enhance this project further with features like local storage, backend integration, or animations for a stronger portfolio.

// Features of the CSS:

// Modern Design:
// Rounded corners for a polished look.
// Subtle box shadows for depth.

// Responsive:
// Adapts to smaller screens using media queries.
// Interactive Elements:
// Hover effects on buttons.
// Filter buttons with active states for better user feedback.

// Color Scheme:
// Cool blues for primary actions.
// Soft greens for completed tasks.
// Red for delete actions.

// 1. Frontend Development with React.js
// Key Skills: Demonstrates expertise in building modern, responsive user interfaces using React.js.
// Details: Showcases proficiency in React concepts such as component-based architecture, state management (useState), props, and conditional rendering.

// 2. Interactive and Functional Application
// Key Skills: Created a fully functional task management app with essential features like adding, editing, filtering, and deleting tasks.
// Details: Implemented dynamic UI interactions and ensured smooth user experience with responsive design and interactive elements.

// 3. Clean and Modular Codebase
// Key Skills: Applied best practices in writing modular, reusable components, and maintaining a clean project structure.
// Details: Demonstrated ability to manage CSS styling, build reusable components, and adhere to scalable coding standards for future enhancements.
// Including these points in your resume emphasizes your technical expertise, problem-solving ability, and adherence to modern development practices, making it highly relevant for React-based roles.

// Built a responsive and interactive task management application using React.js, showcasing proficiency in component-based architecture, state management, and props.
// Implemented core functionality such as task creation, completion, deletion, and filtering, ensuring a seamless user experience with a dynamic UI.
// Maintained a clean and modular codebase with reusable components and applied best practices for scalability and future enhancements.