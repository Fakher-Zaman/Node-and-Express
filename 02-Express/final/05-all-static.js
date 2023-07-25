const express = require('express')
const path = require('path');

const app = express();

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
});

const port = 5000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});