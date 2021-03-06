var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

const mongoose = require('mongoose');
mongoose.connect('mongodb://reader:taqcetreader@82.196.5.30:27017/taqcet')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


global.empty = require('is-empty');
//global.models = require('express-cassandra');
//models.setDirectory(__dirname+'/models').bind(
//    {
//      clientOptions: {
//        //contactPoints: ['188.226.160.187'],
//        contactPoints: ['localhost'],
//        protocolOptions: { port: 9042 },
//        keyspace: 'taqcet',
//        queryOptions: {consistency: models.consistencies.one}
//      },
//      ormOptions: {
//        defaultReplicationStrategy : {
//          class: 'SimpleStrategy',
//          replication_factor: 1
//        },
//        migration: 'safe',
//        createKeyspace: true
//      }
//    },
//    function(err) {
//      if(err) console.log(err.message);
//      else console.log(models.timeuuid());
//    }
//);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
