# expressDemoHbs
### 这是一个基于hbs模板引擎和mongodb数据库，使用Express框架的Demon项目，主要是为了学习express框架中的一些知识。并对其进行总结

## 安装和运行

## 基本路由和静态文件

## 路由的总结：
**路由**指如何定义应用的端点（URLIs）以及如何响应客户端的请求。由一个URI、HTTP请求（GET、POST等）和若干句柄组成。

### 路由方法
路由方法源于HTTP请求方法和express实例相关联.
```javascript
app.get('/',function(req,res){
  res.render('indexx',{
    title: "HomePage"
  });
});
app.post('/post',function(req,res){
  res.render('post',{
    title: 'POST'
  });
});
```
> app.all() 是一个特殊的路由方法，没有任何HTTP方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。不管使用GET、POST、PUT、DELETE或其他任何http模块支持的http请求，句柄都会得到执行。

### 路由路径

路由路径和请求方法一起定义了请求的端点，可以是字符串、字符串模式或者正则表达式。

### 路由句柄
> 可以为请求处理提供多个回调函数，其行为类似中间件。唯一的区别是这些回调函数有可能调用next('route')方法而略过其他路由回调函数，可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。
```javascript
app.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}
var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}
var cb2 = function (req, res) {
  res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]);
```

### 响应方法
1.res.download(), 提示下载文件
2.res.end(),终结响应处理流程
3.res.json(),发送一个JSON格式的响应
4.res.jsonp(),发送一个支持JSONP的JSON格式的响应
5.res.redirect(),重定向请求
6.res.render(),渲染视图模板
7.res.send()，发送各种类型的响应
8.res.sendFile,以八位字节流的形式发送文件
9.res.sendStatus()，设置响应码状态码，并将其以字符串形式作为响应体的一部分发送

### express.Router
可以使用express.Router类创建模块化、可挂载的路由句柄。Rotuer实例是一个完整的中间件和路由系统，因此常称其为一个"mini-app"。
```javascript
var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```


## 中间件的总结：
参考：https://github.com/sqliang/expressDemoHbs/wiki/express%E4%B8%AD%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BB%B6

## 错误处理的总结：

## 调试方面的总结：

## 如何为Express设置代理：






##参考学习资料：
1. 60分钟学会使用node.js + Express + mongoDB （http://ggice.github.io/nodejsstart/）
2. 使用React，nodejs,mongodb,socket.IO开发一个角色投票应用（http://www.kancloud.cn/kancloud/create-voting-app/63983）
2. 
