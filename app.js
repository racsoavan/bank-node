const express = require('express');
const path = require('path');
const debug = require('debug')('app');

const app = express();

app.use(express.static(path.join(__dirname, '/static/')));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (_, response) => {
  response.render('index', {
    greet: 'Hello, world!',
    serverTime: new Date()
  });
});

const port = process.env.PORT || 8880;

app.listen(port, () => debug(`Server is listening on port ${port}`));
