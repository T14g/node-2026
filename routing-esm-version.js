import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server =createServer(async  (req, res) => {
    if (req.url === '/') {
        // serve the homepage with appropriate header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // pipe what we read from the file to the response
        await pipeline(
            createReadStream(__dirname + '/index.html'),
            res
        )
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

})

server.listen(1337, '127.0.0.1');