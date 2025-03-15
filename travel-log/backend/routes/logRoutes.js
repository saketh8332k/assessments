const express = require('express');
const Log = require('../models/Log');

const router = express.Router();

// Create a log
router.post('/', async (req, res) => {
    const { title, description, location, visitDate } = req.body;
    try {
        const newLog = new Log({ title, description, location, visitDate });
        await newLog.save();
        res.status(201).json(newLog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all logs
router.get('/', async (req, res) => {
    try {
        const logs = await Log.find();
        res.status(200).json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;