var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('main.html');
});

router.get('/home', (req, res) => {
  res.redirect('main.html');
})

// display messages for admin 
const list = []

router.get('/admin.html');
// get name list 
router.get('/getNameList', (req, res) => {
  res.send(JSON.stringify(list.slice(0,10)));
})

router.get('/getM', (req, res) => {
  list.push(req.query.name);
  res.status(200);
})
module.exports = router;
