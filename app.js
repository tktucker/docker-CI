// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.set('home', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('views', {
  });
});

app.listen(8080);
module.exports.getApp = app;
