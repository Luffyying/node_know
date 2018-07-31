var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var userName = req.query.txtUserName
	console.log('userName:',userName)
	res.render('subform', { title: '提交表单及接收参数示例' });
});

// router.get('/page', function(req, res) {

// 	var userName = req.query.txtUserName
// 	console.log('userName:',userName)
// 	res.render('usesession', { title: '啦啦啦' });
// });

module.exports = router;