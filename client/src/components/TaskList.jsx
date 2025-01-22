// import React from 'react';
// import TaskItem from './TaskItem';

// const TaskList = ({ tasks, onDelete, onUpdate, onStatusChange }) => {
//   if (tasks.length === 0) {
//     return (
//       <div className="text-center py-8 text-gray-500">
//         No tasks available. Add a new task to get started!
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {tasks.map(task => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           onDelete={onDelete}
//           onUpdate={onUpdate}
//           onStatusChange={onStatusChange}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskList;