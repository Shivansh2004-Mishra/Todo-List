const Task = require('../models/Task');

class TodoController {
    // Add a new task
    async addTask(req, res) {
        const taskDescription = req.body.ele1;
        const priority = req.body.priority || 'medium';
        if (!taskDescription || taskDescription.trim() === "") {
            return res.redirect('/');
        }
        await Task.create({
            title: taskDescription.trim(),
            priority: priority,
            description: taskDescription.trim()
        });
        res.redirect('/');
    }

    // Show all tasks
    async showAllTasks(req, res) {
        const tasks = await Task.find();
        res.render('index', { tasks });
    }

    // Show edit form
    async editTask(req, res) {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).send('Task not found');
        res.render('edit', { task });
    }

    // Update task
    async updateTask(req, res) {
        const { ele1, priority } = req.body;
        await Task.findByIdAndUpdate(req.params.id, {
            title: ele1,
            priority: priority,
            description: ele1
        });
        res.redirect('/?success=Task updated successfully');
    }

    // Delete task
    async deleteTask(req, res) {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/?success=Task deleted successfully');
    }

    // Show filter page
    async showFilterPage(req, res) {
        const tasks = await Task.find();
        res.render('filter', { filteredTasks: tasks });
    }

    // Filter tasks by priority
    async filterTasks(req, res) {
        const priority = req.body.priority;
        let filteredTasks;
        if (priority === "all") {
            filteredTasks = await Task.find();
        } else {
            filteredTasks = await Task.find({ priority: priority });
        }
        res.render('filter', { filteredTasks });
    }
}

module.exports = new TodoController();