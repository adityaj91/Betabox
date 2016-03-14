var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
app.use(express.static(__dirname+'/Pages'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/Pages/home.html');
});
try{
	// if you want to enter a manual port.
	var args = Number(process.argv.slice(2));
	if(isNaN(args)){
    	throw new Error("Not a number");
  	}
	server = app.listen(args, function() {
    	console.log('Ready on port %d', server.address().port);
    	console.log("Server listening on http://localhost:%s", args);
	});
  	server.once('error', function(err) {
  	  console.log("Server in use");
  	  	// This is a messy paste, I had issues getting this error to the outer catch block
		var redirectPort = 3000;
		app.listen(redirectPort);
		console.log("Default arg " + args + " is invalid or in use. \nredirect\n"+
			"Server listening on http://localhost:" + redirectPort);
		});
}
catch(err){
	console.log(err);
	var redirectPort = 3000;
	app.listen(redirectPort);
	console.log("Default arg " + args + " is invalid or in use. \nredirect\n"+
		"Server listening on http://localhost:" + redirectPort);

}
