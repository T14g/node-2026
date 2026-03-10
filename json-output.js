var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {     
  res.writeHead(200, {'Content-Type': 'text/json'});
  var obj = { name: 'John', age: 30, city: 'New York' };
  // JSON.stringify() is a method that converts a JavaScript object into a JSON string.
  res.end(JSON.stringify(obj));
 
}).listen(1337, '127.0.0.1');