var http = require('http');
var ls = require('fs');
var server = http.createServer(function (request, response){
    console.log ('client request URL', request.url);
    if(request.url === '/'){
        ls.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === './stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
        
});
server.listen(6789);
console.log("Running in LOCALHOST at port 6789");