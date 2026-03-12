const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        // serve the homepage with appropriate header
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
        return;
    }

    if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const obj = { name: 'John', age: 30, city: 'New York' };
        res.end(JSON.stringify(obj));
        return;
    }

    // any other route is not found
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');

}).listen(1337, '127.0.0.1');