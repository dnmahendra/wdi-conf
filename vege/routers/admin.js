var express = require('express');
var router = express.Router();

// show basic admin page
router.get('/', function(req, res) {
  var options = {
    root: __dirname + '/../public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('admin.html', options);
});

module.exports = router;
