const express = require("express");

const resources = require("./resourcesModel");

const router = express.Router();

router.get('/resources', (req, res) => {
    resources.findResources()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.post('/resources', (req, res) => {
    resources.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add resource' });
        });
});

module.exports = router;