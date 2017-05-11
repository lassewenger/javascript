var express = require('express');
var router = express.Router();
var jokes = require('../jokes');
var jokeCount = 0;
var jokesCount = 0;
var addJokeCount = 0;

router.get('/', function(req, res, next) {
  req.session.jokeCount = ++jokeCount;
  res.render('joke', {title: 'Random joke', random: jokes.getRandomJoke, count: jokeCount});

});

router.get('/jokes', function(req, res, next){
  req.session.jokesCount = ++jokesCount;
  res.render('jokes', {title: 'All jokes', jokes: jokes.allJokes, count: jokesCount});
})

router.get('/addjoke', function(req, res, next){
  req.session.addJokeCount = ++addJokeCount;
  res.render('addjoke', {title:  'Add Joke', jokes: jokes.allJokes, count: addJokeCount})
})

router.post('/addjoke', function(req, res, next){
  jokes.addJoke(req.body.addjoke)
  res.redirect('addjoke')
})

  
module.exports = router;
