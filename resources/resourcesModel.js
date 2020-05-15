const db = require('../data/dbConfig.js')

module.exports = {
    addResource,
    findResources
}

function findResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources').insert(resource)
}
