var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to sourabhs World!.\nThis is a node.js microservice application running on Kubernetes cluster.\nThis cluster is created using jenking automation.\nName:Sourabh Sharma\nMid :M1035913');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Sorbhs Example app listening at http://%s:%s', host, port);
