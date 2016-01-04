var router = require("./router.js");
//Problem: We need a simple way to look at a user's badge count and Javascript point from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

//Create a web server
var http = require('http');
var port = 8080;

http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(port);
console.log("Server running at http://<<workspace-url>/");

