// const Task = require('../models/Task');

// const taskController = {
//     getAllTasks: async (req, res) => {
//         try {
//             const tasks = await Task.findAll();
//             res.json(tasks);
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     },

//     createTask: async (req, res) => {
//         try {
//             const newTask = await Task.create(req.body);
//             res.status(201).json(newTask);
//         } catch (error) {
//             res.status(400).json({ message: error.message });
//         }
//     },

//     updateTask: async (req, res) => {
//         try {
//             const updatedTask = await Task.update(req.params.id, req.body);
//             if (!updatedTask) {
//                 return res.status(404).json({ message: 'Task not found' });
//             }
//             res.json(updatedTask);
//         } catch (error) {
//             res.status(400).json({ message: error.message });
//         }
//     },

//     deleteTask: async (req, res) => {
//         try {
//             const deleted = await Task.delete(req.params.id);
//             if (!deleted) {
//                 return res.status(404).json({ message: 'Task not found' });
//             }
//             res.json({ message: 'Task deleted successfully' });
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     },

//     updateTaskStatus: async (req, res) => {
//         try {
//             const updatedTask = await Task.updateStatus(req.params.id, req.body.status);
//             if (!updatedTask) {
//                 return res.status(404).json({ message: 'Task not found' });
//             }
//             res.json(updatedTask);
//         } catch (error) {
//             res.status(400).json({ message: error.message });
//         }
//     }
// };

// module.exports = taskController;