var express = require('express');
var router = express.Router();
var jokes = require('../jokes');

router.get('/joke', function (req, res, next) {
    res.send({joke: jokes.getRandomJoke()});
});

module.exports = router;