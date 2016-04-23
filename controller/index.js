/**
 * Created by dell on 2016/4/23.
 */
'use strict';
var http = require('http'),
    async = require('async');

module.exports = function(router){
    // 全局路由配置
    router.get('/', function (req, res, next) {
        res.redirect('/index');
    });
};
