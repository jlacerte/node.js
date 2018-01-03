var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('hydrant.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

  });
}).listen(30000); 
console.log(`Server running at http://locahost:30000/`);