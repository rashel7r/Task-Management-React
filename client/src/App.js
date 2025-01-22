import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import TaskFilter from './components/TaskFilter';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', taskData);
      setTasks([response.data, ...tasks]);
    } catch (err) {
      setError('Failed to create task');
    }
  };

const handleUpdateTask = async (id, taskData) => {
  try {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, taskData);
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...taskData } : task
    ));
  } catch (err) {
    setError('Failed to update task');
  }
};

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const handleStatusChange = async (id) => {
    try {
      const task = tasks.find(t => t.id === id);
      const newStatus = task.status === 'completed' ? 'not_completed' : 'completed';
      await axios.patch(`http://localhost:5000/api/tasks/${id}/status`, { status: newStatus });
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, status: newStatus } : task
      ));
    } catch (err) {
      setError('Failed to update task status');
    }
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Task Manager</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <TaskForm onSubmit={handleCreateTask} />
      
      {/* Add TaskFilter component */}
      <TaskFilter 
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <div className="space-y-4">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onStatusChange={handleStatusChange}
            onUpdate={handleUpdateTask}
          />
        ))}
      </div>
      
      {filteredTasks.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No {filter === 'all' ? '' : filter} tasks found
        </p>
      )}
    </div>
  );
}

export default App;