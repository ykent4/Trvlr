const express = require('express');
const bodyParser = require('body-parser');
const image = require('../database/index.js');
const app = express();
const path = require('path');
const router = require('./routes.js');
const port = 4002;
const morgan = require('morgan');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.use('/travelboard/api', router);

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports.app = app;