///<reference path='./lib/tslib/node.d.ts' />
///<reference path='./lib/tslib/express.d.ts' />
var express = require('express');
var http = require('http');
var path = require('path');

var routes = require('./config/routes');

var app = express();

app.configure('development', function () {
    app.set('port', process.env.PORT || 3000);

    app.set('views', path.join(__dirname, './app/views'));

    app.engine('html', require('ejs').renderFile);

    app.use(express.favicon(path.join(__dirname, './app/public/favicon.ico')));

    app.use(express.logger('dev'));

    app.use(express.json());

    app.use(express.urlencoded());

    app.use(express.methodOverride());

    app.use(express.static(path.join(__dirname, 'public')));

    app.use(express.cookieParser());
});

routes.init(app);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
