// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
    try {
        const [tasks] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a task
app.post('/api/tasks', async (req, res) => {
    try {
        const { task_name, description } = req.body;
        const [result] = await pool.query(
            'INSERT INTO tasks (task_name, description) VALUES (?, ?)',
            [task_name, description]
        );
        const [newTask] = await pool.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
        res.status(201).json(newTask[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update task status
app.patch('/api/tasks/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        await pool.query(
            'UPDATE tasks SET status = ? WHERE id = ?',
            [status, req.params.id]
        );
        res.json({ message: 'Status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.put('/api/tasks/:id', async (req, res) => {
    try {
      const { task_name, description } = req.body;
      await pool.query(
        'UPDATE tasks SET task_name = ?, description = ? WHERE id = ?',
        [task_name, description, req.params.id]
      );
      const [updatedTask] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
      res.json(updatedTask[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    
});