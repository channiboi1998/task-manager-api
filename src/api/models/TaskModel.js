const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task name should not be left blank!'],
        trim: true,
        maxLength: [20, 'The length of name should not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);