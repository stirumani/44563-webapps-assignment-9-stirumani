var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x=Math.random()*10;
    var a=Math.hypot(x);
    var b=Math.ceil(x);
    var c=Math.clz32(x); 
  res.render('computation', { title: 'Tirumani shivani Bonus',
 x:x,a:a,b:b,c:c});
});

module.exports = router;
