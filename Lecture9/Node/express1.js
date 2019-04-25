var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/myurl', function (req, res) {
   res.send('Hello myurl');
})

app.get('/inserturl', function (req, res) {
   res.send('Hello insert url');
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})