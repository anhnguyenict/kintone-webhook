var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var server = app.listen(80 || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

app.post("/contacts", function(req, res) {
  res.json({"text": "OK"});
});