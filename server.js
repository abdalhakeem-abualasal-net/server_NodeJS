const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    fs.readFile('file.txt', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end('Error reading file');
            return;
        }
        try {
            const jsonData = JSON.parse(data); 
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify(jsonData));
        } catch (error) {
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end('Error: Could not parse JSON');
        }
    });
});

server.listen(port, () => {
    console.log('server is running on at http://localhost:' + port);
});
