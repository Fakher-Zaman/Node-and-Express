const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

// app.get('api/v1/task');          - get all the tasks
// app.post('api/v1/task');         - create a new task
// app.get('api/v1/task/:id');      - get a single task
// app.patch('api/v1/task/:id');    - update a task
// app.delete('api/v1/task/:id');   - delete a task

const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}`));