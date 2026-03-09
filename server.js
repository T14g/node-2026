var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  // __dirname is a global variable that contains the directory name of the current module,
  //  in this case, the directory where server.js is located.
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  var message = 'Hello city';
  // what is this { Message } ? It is a placeholder in the HTML file that we will replace with the actual message.
  html = html.replace('{Message}', message);
  res.end(html);  

}).listen(1337, '127.0.0.1');
