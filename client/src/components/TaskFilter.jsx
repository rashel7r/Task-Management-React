import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded transition-colors ${
          currentFilter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`px-4 py-2 rounded transition-colors ${
          currentFilter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => onFilterChange('not_completed')}
        className={`px-4 py-2 rounded transition-colors ${
          currentFilter === 'not_completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Not Completed
      </button>
    </div>
  );
};

export default TaskFilter;