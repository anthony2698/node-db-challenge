const db = require("../data/db-config");

module.exports = {
    addProject,
    findProjects
}

function findProjects() {
    return db('projects')
}

function addProject(project) {
    return db('projects').insert(project)
}

