const http = require('http');
http.createServer(function(req,res){
	res.write('Hello world !');
	res.end();
}).listen(3000);
console.log('Server started! Listening on port 3000');
