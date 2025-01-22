import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ task, onDelete, onUpdate, onStatusChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedData) => {
    onUpdate(task.id, updatedData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="mb-4">
        <TaskForm onSubmit={handleUpdate} initialData={task} />
        <button
          onClick={() => setIsEditing(false)}
          className="w-full mt-2 bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">{task.task_name}</h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange(task.id)}
            className={`px-3 py-1 rounded ${
              task.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {task.status === 'completed' ? 'Completed' : 'Pending'}
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;