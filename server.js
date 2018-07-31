var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

var data = [];

app.use(bodyParser.json());
app.get('/get', function(req, res) {
    res.json(data);
});
app.post('/post', function(req, res) {
    data.push(req.body);
    console.log(data);
    res.json(data);
});
app.put('/put', function(req, res) {
    var newData = [];
    newData.push(req.body);
    data = data.map(obj => newData.find(o => o.name === obj.name) || obj);
    res.status(204).end();
});

app.all('/delete', function(req, res) {
    data = data.filter( el => el.name !== req.body.name);
    res.json(data);
});
var port = process.env.PORT || 8080;
var server = app.listen(port);
console.log('Express app started on port ' + port);