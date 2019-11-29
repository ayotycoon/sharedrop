var express = require('express');
var router = express.Router();
const path = require('path')

/* GET users listing. */
router.get('/get/:item', function(req, res, next) {
  res.sendFile(path.resolve(__dirname , "../tmp/" + req.params.item));
});

module.exports = router;
