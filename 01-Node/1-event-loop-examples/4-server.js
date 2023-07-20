const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World!');
});

const port_no = 5000;
server.listen(port_no, () => {
    console.log(`Server listening on port ${port_no}`);
});