require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./errorHandler');

const app = express();

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// fileanalyse endpoint
app.use('/api/fileanalyse', require('./routes/fileanalyse'));

// over ride error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
