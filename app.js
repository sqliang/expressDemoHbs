var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//===================>mongodb连接配置
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/expressDemoHbs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
// 如果静态文件存放在多个目录下，可以多次调用express.static中间件
// 访问静态资源文件时，express.static中间件会根据目录添加的顺序查找所有的文件
app.use(express.static(path.join(__dirname, 'files')));

// 希望所有通过express.static访问的文件都存放在一个“虚拟目录”（不存在的目录）下面，
// 可以通过为静态资源目录指定一个挂载路径的方式来实现，
app.use('/static',express.static('public'));




// Make our db to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', routes);
app.use('/users', users);
//app.use('/about',about);

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
