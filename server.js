require('babel-register');

const express = require('express');
const pages = require('./server/pages');
const flickr = require('./api/flickr');
const photoset = require('./stores/photoset');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  flickr()
    .then(() => {
      response.render('index', {
        body: pages.index(photoset.get()),
        preloadedState: photoset.get(),
      });
    })
    .catch(() => {
      response.send('an error occurred');
    });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
