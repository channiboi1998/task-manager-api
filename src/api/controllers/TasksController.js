const Task = require('../models/TaskModel');

class TasksController {

    async getTasks(request, response) {
        /**
         * Function responsible for fetching the tasks.
         */
        let data = await Task.find();
        response.status(200).json(data);
    }

    async getTask(request, response) {
        /**
         * Function for fetching a single task.
         */
        const { id: taskID } = request.params;
        let data = await Task.findOne({ _id: taskID });
        response.status(200).json(data);
    }

    async createTask(request, response) {
        /**
         * Function for creating a task.
         */
        let data = await Task.create(request.body);
        response.status(200).json(data);
    }

    async updateTask(request, response) {
        /**
         * Function for updating a task by id.
         */
        const { id: taskID } = request.params;
        let data = await Task.findByIdAndUpdate({ _id: taskID }, request.body, {
            new: true,
            runValidators: true,
        });
        response.status(200).json(data);
    }

    async deleteTask(request, response) {
        /**
         * Function for deleting a task via task id.
         */
        const { id: taskID } = request.params;
        let data = await Task.findOneAndDelete({ _id: taskID });
        response.status(201).json(data);
    }

}

module.exports = TasksController;