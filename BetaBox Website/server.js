var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var httpServer = http.Server(app);

var mysql = require("mysql");



app.use(express.static(__dirname+'/Pages'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({secret: 'PoorlySecuredSecret', saveUninitialized: true,
    resave: true}));

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Betab0x",
  database: "Betabox",
  port: '3306'
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db' + err);
    return;
  }
  console.log('Connection established');
});



// con.end(function(err) {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });
app.use( '/', function(req, res, next){
	console.log("App Use Home user: " + req.session.user);
  
  next();
});
app.post('/home.html', function(req, res){
	// post the code!
	var username = req.body.login;
	var pass = req.body.password;
	// sql.getTuple("users", username, pass);
	var query = 'SELECT * FROM MOCK_USERS WHERE userID = "' + username + '" AND password = "' + pass + '"  ; '
	console.log("Query: " + query);
	con.query(query ,function(err,rows){
	  if(err) throw err;
	  req.session.user = username;
	  console.log('Data received from Db:\n');
	  console.log(rows);
	  console.log("reqses: " + req.session.user);
	});
	
	console.log(username, pass);
	console.log("LOGIN USER: " + req.session.user);
  res.redirect('/');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Pages/home.html');
  console.log("Home user: " + req.session.user);
});

try{
	// if you want to enter a manual port.
	var args = Number(process.argv.slice(2));
	if(isNaN(args)){
    	throw new Error("Not a number");
  	}
  	// No port number entered. 
  	if(args == 0){
  		throw new Error("No port entered.");
  	}
  	console.log(args);
	server = app.listen(args, function() {
    	console.log('Ready on port %d', server.address().port);
    	console.log("Server listening on http://localhost:%s", server.address().port);
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
