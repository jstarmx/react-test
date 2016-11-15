require('babel-register');

const files = require('./server/files');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index', { body: files.index() });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
