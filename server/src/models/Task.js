// const pool = require('../config/database');

// class Task {
//     static async findAll() {
//         const [rows] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
//         return rows;
//     }

//     static async findById(id) {
//         const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
//         return rows[0];
//     }

//     static async create(taskData) {
//         const { task_name, description } = taskData;
        
//         // Validate data
//         if (!task_name) {
//             throw new Error('Task name is required');
//         }

//         const [result] = await pool.query(
//             'INSERT INTO tasks (task_name, description) VALUES (?, ?)',
//             [task_name, description]
//         );

//         return this.findById(result.insertId);
//     }

//     static async update(id, taskData) {
//         const { task_name, description } = taskData;

//         // Validate data
//         if (!task_name) {
//             throw new Error('Task name is required');
//         }

//         await pool.query(
//             'UPDATE tasks SET task_name = ?, description = ? WHERE id = ?',
//             [task_name, description, id]
//         );

//         return this.findById(id);
//     }

//     static async delete(id) {
//         const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
//         return result.affectedRows > 0;
//     }

//     static async updateStatus(id, status) {
//         // Validate status
//         if (!['completed', 'not_completed'].includes(status)) {
//             throw new Error('Invalid status value');
//         }

//         await pool.query(
//             'UPDATE tasks SET status = ? WHERE id = ?',
//             [status, id]
//         );

//         return this.findById(id);
//     }
// }

// module.exports = Task;