const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.send('Get All Tasks');
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const getTask = (req, res) => {
    res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
    res.send('Update Task');
};

const deleteTask = (req, res) => {
    res.send('Delete Task');
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};