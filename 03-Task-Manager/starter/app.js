const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Task Manager App');
});

// tasks routes
app.use('/api/v1/tasks', tasks);

// app.get('api/v1/task');          - get all the tasks
// app.post('api/v1/task');         - create a new task
// app.get('api/v1/task/:id');      - get a single task
// app.patch('api/v1/task/:id');    - update a task
// app.delete('api/v1/task/:id');   - delete a task

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();