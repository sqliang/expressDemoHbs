var express = require('express');
var router = express.Router();
/**
 * index
 */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'HomePage',
    name: 'hello'
  });
});
/**
 * index
 */
router.get('/index',function(req,res,next){
  res.render('index', {
    title: 'HomePage',
    name: 'hello'
  });
});
/**
 * login
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


module.exports = router;
