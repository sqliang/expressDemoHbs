var express = require('express');
var router = express.Router();
/**
 * 对网站首页的访问，数据交由index.hbs模板来渲染
 */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'HomePage',
    name: 'hello'
  });
});
/**
 * index，同上
 */
router.get('/index',function(req,res,next){
  res.render('index', {
    title: 'HomePage',
    name: 'hello'
  });
});
/**
 * login
 * 获取数据库里的数据，然后交由login.hbs进行渲染
 */
router.get('/login',function(req,res,next){
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('login',{
      title: '登录',
      username:'sqliang',
      psw:'19891111',
      userList: docs,
      layout: 'partials/login'
    });
  });
});
// 接受post请求，request参数有username，email,然后插入到mongodb数据库
router.post('/adduser',function(req,res,next){
  var db = req.db;
  var collection = db.get('usercollection');

  var username = req.body.username;
  var email = req.body.email;

  collection.insert({
    "username": username,
    "email": email
  },function(err,doc){
    if(err){
      res.send('here was a problem adding the information to the database.');
    }else{
      //res.send('success');
      /*res.location('login');
      res.redirect('login');*/
      res.json({success:1});//返回json数据
    }
  });

});

// /user 接受PUT请求
router.get('/user',function(req,res,next){
  res.send('Got a pust request at /user');
});

// /user 节点接受DELETE 请求
router.delete('/user',function(req,res,next){
  res.send('Got a DELETE request at /user');
});




module.exports = router;
