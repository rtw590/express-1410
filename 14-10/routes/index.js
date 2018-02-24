var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '14-10' });
});

/* GET home page. */
router.get('/tutorials', function(req, res, next) {
  res.render('tutorials', { title: '14-10: Tutorials' });
});

module.exports = router;
