import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './assets/bootsctrap.min.css';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    dueDate: null
  });

  const handleAddTask = () => {
    if (newTask.name.trim() !== '') {
      const task = {
        id: Math.random().toString(),
        name: newTask.name,
        description: newTask.description,
        dueDate: newTask.dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask({
        name: '',
        description: '',
        dueDate: null
      });
    }
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="mt-3">Task Manager</h1>
      <div className="row mb-2">
        <div className="col-md-6">
          <input
            type="text"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            placeholder="Enter task name"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <input
            type="text"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            placeholder="Enter task description"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="date-picker-container">
            <DatePicker
              selected={newTask.dueDate}
              onChange={(date) => setNewTask({ ...newTask, dueDate: date })}
              placeholderText="Select due date"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button onClick={handleAddTask} className="btn btn-primary mb-2">
            Add Task
          </button>
        </div>
      </div>
      <ul className="list-group mt-3">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <div className="form-check">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
                className="form-check-input"
              />
              <span className={task.completed ? 'completed-task' : ''}>{task.name}</span>
            </div>
            <div>{task.description}</div>
            <div>{task.dueDate && task.dueDate.toLocaleDateString()}</div>
            <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger mt-2">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;