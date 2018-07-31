var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,users:[{
  	username:'luffy'
  }]});
});

router.get('/page',function(req,res,next){
	res.render('index',{
		title:'hello nodeJs'
	})
})

module.exports = router;
