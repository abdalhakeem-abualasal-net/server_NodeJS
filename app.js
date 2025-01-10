const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('file.txt', (err, data) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end('Error reading file')
            return;
        } else {
            res.writeHead(200, { 'content-type': 'text.plain' });
            res.end(data);
        }
    })
});

server.listen(port, () => {
    console.log('server is running on at http://localhost:' + port);
});