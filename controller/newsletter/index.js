/**
 * Created by dell on 2016/4/23.
 */
'user strict';
var http = require('http');
var async = require("async");

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('newsletter/index',{

        });
    })
}