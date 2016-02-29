var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var options = {
    root: __dirname + '/../public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('index.html', options);
});

router.get('/game', function(req, res) {
  var options = {
    root: __dirname + '/../public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('clumsy-index.html', options);
});

module.exports = router;
