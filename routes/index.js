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
  res.render('index',{
    title: 'HomePage',
    name:'index'
  });
});
/**
 * login
 */
router.get('/login',function(req,res,next){
  res.render('login',{
    title: '登录',
    username:'sqliang',
    psw:'19891111',
    layout: 'partials/login'
  });
});

module.exports = router;
