const db = require('../data/dbConfig.js')

module.exports = {
    addTask,
    findTasks
}

function findTasks(project_id) {
    return db('tasks')
        .innerJoin('projects', 'projects.id', 'tasks.project_id')
        .where({ project_id: project_id})
}

function addTask(task) {
    return db('tasks').insert(task)
}

