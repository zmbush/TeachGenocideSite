
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var http = require('http');
var React = require('react/addons');

var app = express();

var pages = require('./dist/pages');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(function(req, res, next) {
  var u = req.url.replace("/", "");
  console.log(u);
  if (u in pages) {
    res.send(React.renderComponentToStaticMarkup(pages[u]()));
  } else {
    next();
  }
});
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
