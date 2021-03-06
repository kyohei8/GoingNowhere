var express = require('express')
var path = require('path')
var port = process.env.PORT || 1337;

var app = express()
app.use(function (req, res, next) {
    if (req.url.match(/.gz$/)) {
        res.set('Content-Encoding', 'gzip')
    }
    if (req.url.match(/.js.gz$/)) {
        res.set('Content-Type', 'text/javascript')
    }

    next()
})
app.use(express.static('.'));

app.get('/', function(req, res){
  res.send('it works');
});

app.listen(port, function () {
    console.log('listen on http://localhost:%s', port)
})