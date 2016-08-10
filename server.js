var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var server = app.listen(80 || 8080, function () {
});

app.post("/contacts", function(req, res) {
  res.json({"text": "OK"});
});