var express = require('express');
var router = express.Router();

let sum =0;
let more =0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more = more +1;
  sum = sum + more; // or can be sum => sum = more
  res.send(`Sum is: ${sum}`);
});

module.exports = router;
