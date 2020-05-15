const express = require("express");

const projects = require("./projectsModel");

const router = express.Router();


router.get('/', (req, res) => {
    projects.findProjects()
        .then(projects => {
            res.status(200).json(projects.map(project => {
                if (project.completed) {
                  return {...project, completed: true}
                } else {
                  return {...project, completed: false}
                }
              }));
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
})

router.post('/', (req, res) => {
    projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add project' });
        });
})


module.exports = router;