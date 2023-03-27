var express = require("express");
var router = express.Router();

/* GET computation page. */
router.get("/", function (req, res, next) {
  let x = req.query.x;
  let randVal = Math.random().toFixed(2);
  let logVal = Math.log2(randVal).toFixed(2);
  let coshVal = Math.cosh(randVal).toFixed(2);
  let floorVal = Math.floor(randVal).toFixed(2);
  if (x == undefined) {
    x = randVal;
  }
  res.render("computation", {
    logVal: `Math.log2() applied to  ${x} is ${logVal}`,
    coshVal: `Math.cosh() applied to  ${x} is ${coshVal}`,
    floorVal: `Math.floor() applied to  ${x} is ${floorVal}`,
  });
});

module.exports = router;
