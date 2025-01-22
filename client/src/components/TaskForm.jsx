import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    task_name: initialData?.task_name || '',
    description: initialData?.description || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({ task_name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded-lg shadow">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Name"
          value={formData.task_name}
          onChange={(e) => setFormData({ ...formData, task_name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          rows="3"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
      >
        {initialData ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;