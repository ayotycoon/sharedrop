var express = require('express');
var router = express.Router();
const path = require('path')
const fs = require('fs');

/* GET users listing. */
router.get('/get/:item', function (req, res, next) {
  const filePath = path.resolve(__dirname, "../tmp/" + req.params.item);

  try {
    const exists = fs.statSync(filePath)

    if(exists) {
      res.download(filePath, req.params.item);
    }

  


  } catch (error) {
    res.status(404).json('file not found, file might have been deleted or does not exist')
  return;
  }


  res.download(path.resolve(__dirname, "../tmp/" + req.params.item), req.params.item);

});

module.exports = router;
