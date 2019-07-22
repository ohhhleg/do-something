var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //再找views里的index.jade
  res.render('index', { title: 'Express' });
});

router.get('./home.html',function(req,res,next){
  //再找views里index.jade
  res.send('home')
});
module.exports = router;
