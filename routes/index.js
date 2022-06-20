const express = require('express');
const router = express.Router();

router.get('/main', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;