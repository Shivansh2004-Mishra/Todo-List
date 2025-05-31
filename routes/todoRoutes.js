const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Show all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', { tasks, success: req.query.success });
});

// Add a new task
router.post('/', async (req, res) => {
  const { ele1, priority } = req.body;
  if (!ele1 || ele1.trim() === '') {
    return res.render('index', { tasks: await Task.find(), success: 'Task cannot be empty!' });
  }
  await Task.create({ title: ele1, priority });
  res.redirect('/?success=Task added successfully');
});

// Show edit form (GET)
router.get('/edit/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  const tasks = await Task.find();
  res.render('edit', { task, tasks });
});

// Update task (PUT)
router.put('/edit/:id', async (req, res) => {
  const { ele1, priority } = req.body;
  await Task.findByIdAndUpdate(req.params.id, { title: ele1, priority });
  res.redirect('/?success=Todo updated successfully');
});

// Delete task (DELETE)
router.delete('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/?success=Todo deleted successfully');
});

module.exports = router;