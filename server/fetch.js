var http = require('http');
var options = {
    host: 'www.google.com',
    path: '/index.html'
};
var express = require('express');
var app = express();

var req = http.get('/', function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    var bodyChunks = [];
    res.on('data', function (chunk) {
        bodyChunks.push(chunk);
    }).on('end', function () {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);
    })
});

app.listen(3000);