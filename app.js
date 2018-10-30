var express = require('express');
var path = require('path');

var app = express();
app.set('port', 3000);
/* app.get('/', function(req, res){
    console.log('Get Homepage');
    res
        .status(400)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
}) */
 /*testing--------*/
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', function(req, res){
    console.log('Get Homepage');
    res
        .status(200)
        .json({"JSON Received": true});
});

app.get('/file', function(req, res) {
    console.log('Get the file');
    res
    .status(200)
    .sendfile(path.join(__dirname, 'app.js'));

});

var server = app.listen(app.get('port'), 
function() {
    var port = server.address().port;
    console.log('things will happen at port: ' + port);
});