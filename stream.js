var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {     
  res.writeHead(200, {'Content-Type': 'text/html'});
  // creatre a read stream for the index.html file and pipe it to the response object
  // a stream is a way to read or write data in chunks, 
  // instead of reading or writing the entire file at once. 
  // This is more efficient and faster, especially for large files.
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(1337, '127.0.0.1');