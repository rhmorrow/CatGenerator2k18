const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  res.redirect('index.html')
})

app.get('/cats', function(req, res) {
  db.get(function(err, data){
    if(err){
      console.error(err)
    }
    console.log('Cats got. ', data)
    res.end(JSON.stringify(data));
  });
})
app.post('/cats', function(req, res) {
  res.writeHead(200);
  console.log(req.body);
  db.save(req.body);
  res.end('Cat received!');
})

app.listen(3131, () => console.log('CGX18 listening on port 3131 :3'))