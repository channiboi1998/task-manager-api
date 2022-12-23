const express = require('express');
const Router = express.Router();

/**
 * Importing the controller and creating an Instance.
 */
const Controller = require('../controllers/TasksController');
const TasksController = new Controller();

/**
 * Importing `asyncWrapper` Middleware for handling promises on controller methods.
 */
const asyncWrapper = require('../middlewares/Async');

/**
 * Declaration of routes towards their respective controller methods.
 */
Router.get('/api/v1/tasks', asyncWrapper(TasksController.getTasks.bind(TasksController)));
Router.post('/api/v1/tasks', asyncWrapper(TasksController.createTask.bind(TasksController)));
Router.get('/api/v1/tasks/:id', asyncWrapper(TasksController.getTask.bind(TasksController)));
Router.patch('/api/v1/tasks/:id', asyncWrapper(TasksController.updateTask.bind(TasksController)));
Router.delete('/api/v1/tasks/:id', asyncWrapper(TasksController.deleteTask.bind(TasksController)));

module.exports = Router;