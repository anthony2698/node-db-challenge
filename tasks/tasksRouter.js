const express = require("express");

const tasks = require("./tasksModel");

const router = express.Router();

router.get('/:pid/tasks', (req, res) => {
    const pid = req.params.pid
    tasks.findTasks(pid)
        .then(tasks => {
            res.status(200).json(tasks.map(task => {
                if (task.completed) {
                  return {...task, completed: true}
                } else if (!task.completed){
                  return {...task, complete: false}
                } else if (task.complete) {
                    return {...task, complete: true}
                } else {
                    return {...task, complete: false}
                }
              }))
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

router.post('/tasks', (req, res) => {
    tasks.addTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add task' });
        });
});

module.exports = router;